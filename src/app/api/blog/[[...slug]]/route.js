import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const { slug } = await params;
    console.log(slug);

    if (slug) {
        return NextResponse.json({
            message: `Ban dang xem bai viet tai duong dan: blog/${slug.join('/')}`,
            pathSegments: slug
        })
    }

    return NextResponse.json({
        message: `Ban dang xem trang chinh blog`,
        pathSegments: []
    })
}