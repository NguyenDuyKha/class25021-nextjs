"use client";

import { useSearchParams } from "next/navigation";
import React, { useState } from "react";
// import ServerComponent from "../ServerComponent/ServerComponent";

export default function InteractiveWelcome({ children }) {
    const searchParams = useSearchParams();
    const category = searchParams.get('category') || "phone";
    const sort = searchParams.get('sort') || "A-Z";

    console.log(category, sort);

    const [ count, setCount ] = useState(0);

    const handleClick = (e) => {
        setCount(prevCount => prevCount + 1);
    }

    return (
        <div>
            <p>Counter: {count}</p>
            <button onClick={handleClick}>Increase</button>
            {/* <ServerComponent/> Khong dung cach import SC into CC */}
            { children }
        </div>
    );
}