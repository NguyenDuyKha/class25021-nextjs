"use client";

import React from "react";
import { useParams } from "next/navigation";

export default function BlogIdDisplay() {
    const params = useParams();
    const { blogId } = params;

    return (
        <p>ID from useParams: {blogId}</p>
    )
}