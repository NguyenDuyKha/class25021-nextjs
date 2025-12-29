import Link from "next/link"
import styles from "./blog.module.css";

export const posts = [
    {
        id: 'post1',
        title: "Bai viet 1",
        description: "Mo ta chi tiet cho bai viet so 1",
        lastModified: '2025-12-29T10:00:00Z'
    },
    {
        id: 'post2',
        title: "Bai viet 2",
        description: "Mo ta chi tiet cho bai viet so 2",
        lastModified: '2025-12-26T10:00:00Z'
    },
    {
        id: 'post3',
        title: "Bai viet 3",
        description: "Mo ta chi tiet cho bai viet so 3",
        lastModified: '2025-12-27T10:00:00Z'
    },
    {
        id: 'post4',
        title: "Bai viet 4",
        description: "Mo ta chi tiet cho bai viet so 4",
        lastModified: '2025-12-28T10:00:00Z'
    }
]

async function fetchPosts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    if (!res.ok) {
        throw new Error("Failed to fetch posts");
    }
    return res.json();
}

async function fetchUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    if (!res.ok) {
        throw new Error("Failed to fetch users");
    }
    return res.json();
}

export default async function BlogPage() {
    // const posts = await fetchPosts();
    // const users = await fetchUsers();

    const [posts, users] = await Promise.all([
        fetchPosts(),
        fetchUsers()
    ])

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Blog Page</h2>
            <section>
                <h2>Users</h2>
                <ul>
                    {users.map(user => (
                        <li key={user.id}>
                            {user.name} ({user.username})
                        </li>
                    ))}
                </ul>
            </section>

            <section>
                <h2>Posts</h2>
                <div className={styles.postList}>
                    {
                        posts.map((p) => (
                            <div key={p.id} className={styles.postCard}>
                                <h2>{p.title}</h2>
                                <p>{p.body.substring(0, 100)}...</p>
                                <Link href={`/blog/${p.id}`}>Read more</Link>
                            </div>
                        ))
                    }
                </div>
            </section>
        </div>
    )
}