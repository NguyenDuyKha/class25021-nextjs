import { NextResponse } from "next/server";

export async function GET(request) {
    const headers = new Headers();
    headers.set('X-Message', "From Header object");
    headers.set("Cache-Control", "no-store");

    return NextResponse.json({
        message: "This response has custom headers"
    }, {
        status: 202,
        // headers: {
        //     "X-Message": "Hello",
        //     "Cache-Control": "no-store"
        // }
        headers: headers
    })
}