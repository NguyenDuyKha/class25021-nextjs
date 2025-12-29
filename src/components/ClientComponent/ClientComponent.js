"use client";

import React from "react";

export default function ClientComponent({ serializableProp }) {
    console.log("ClientComponent Render: ", serializableProp);

    return (
        <div>
            <h2>Client Component</h2>
            <p>serializableProp: </p>
            <p>{ serializableProp ?
                serializableProp.toString() :
                "Prop is null or undefined"
            }</p>

            {/* <p>SERVER_SECRET_KEY: {process.env.SERVER_SECRET_KEY}</p> */}
            <p>NEXT_PUBLIC_USER_ID: {process.env.NEXT_PUBLIC_USER_ID}</p>
        </div>
    )

}