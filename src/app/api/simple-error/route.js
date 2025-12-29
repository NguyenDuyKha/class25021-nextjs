import { NextResponse } from "next/server";

export async function GET(request) {
    try {
        throw new Error("Day la loi co chu dich");
        return NextResponse.json({ message: "Thanh cong" })
    } catch (error) {
        console.error("Loi:", error.message);
        return NextResponse.json({
            message: "Da xay ra loi khi xu ly yeu cau",
            error: error.message,
            code: "API_ERROR_001"
        }, { status: 500 })
    }
}