import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request) {
    const { searchParams } = request.nextUrl;
    const name = searchParams.get('name') || "Guest";
    const age = searchParams.get('age') || "unknown";

    const headersList = await headers();
    headersList.forEach((value, key) => {
        console.log(`${key} ==> ${value}`);
    });
    const userAgent = headersList.get('user-agent');

    return NextResponse.json({
        message: `Hello, ${name} !`,
        age,
        userAgent
    })
}

export async function POST(request) {
    const body = await request.json();
    return NextResponse.json({
        message: body
    }, {
        status: 201
    })
}