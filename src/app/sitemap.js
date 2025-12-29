import { posts } from "./(marketing)/blog/page"

const BASE_URL = 'http://localhost:3000'

export default function sitemap() {
    const postUrls = posts.map((post) => ({
        url: `${BASE_URL}/blog/${post.id}`,
        lastModified: new Date(post.lastModified)
    }))
    // [
    //    { url: 'http://localhost:3000/blog/post1',
    //      lastModified: ....
    //    }, ...
    // ]

    return [
        {
            url: BASE_URL,
            lastModified: new Date(), // lay database
        },
        {
            url: `${BASE_URL}/about`,
            lastModified: new Date()
        },
        ...postUrls
    ]
}