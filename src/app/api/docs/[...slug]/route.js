import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const { slug } = await params;
    console.log(slug);

    return NextResponse.json({
        message: `Ban dang xem tai lieu tai duong dan: docs/${slug.join('/')}`,
        pathSegments: slug
    })
}