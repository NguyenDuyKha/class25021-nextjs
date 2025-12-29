import Link from "next/link";
import { posts } from "../page";
import BlogIdDisplay from "./BlogIdDisplay";
import Image from "next/image";

export const dynamicParams = true;

export async function generateMetadata({ params }) {
    const { blogId } = await params;
    const post = posts.find(p => p.id === blogId);

    if (!post) {
        return {
            title: "Khong tim thay bai viet"
        }
    }

    return {
        title: post.title,
        description: `Ban dang xem bai viet ve ${post.description}`
    }
}

export async function generateStaticParams() {
    return posts.map(post => ({
        blogId: post.id
    }));
}
// -> [{ blogId: 'post1' }, { blogId: 'post2' },
// { blogId: 'post3' }, { blogId: 'post4' }]

// params = { blogId: 'post1' }
export default async function BlogDetailPage({ params }) {
    console.log('BlogDetailPage rendering')

    const { blogId } = await params;
    const post = posts.find(p => p.id === blogId);

    return (
        <div>
            <h3>Blog Detail Page - {blogId}</h3>

            <Image
                src="/next.svg"
                alt="Sample image"
                width={250}
                height={100}
            />

            { post ?
            (<>
                <h1>{post.title}</h1>
                <p>{post.description}</p>
            </>) :
            (<>
                <h1>Khong tim thay bai viet</h1>
                <Link href="/blog">Go to Blog</Link>
            </>)}

            <BlogIdDisplay/>
        </div>
    );
}