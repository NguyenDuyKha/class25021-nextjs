import { NextResponse } from "next/server";

export async function GET(request) {
    const response = NextResponse.json({ message: "Cookie da duoc thiet lap" });
    response.cookies.set("myCookie", "Hello Nextjs",
        {
            path: "/",
            maxAge: 60 * 60 * 24
        }
    );

    return response;
}

export async function DELETE(request) {
    const response = NextResponse.json({ message: "Cookie da duoc xoa" });
    response.cookies.delete("myCookie");
    return response;
}