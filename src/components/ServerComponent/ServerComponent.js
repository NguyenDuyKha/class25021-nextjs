"use server";

export default async function ServerComponent() {
    return (
        <>
            <h3>Hello from ServerComponent</h3>
            <p>SERVER_SECRET_KEY: {process.env.SERVER_SECRET_KEY}</p>
            <p>NEXT_PUBLIC_USER_ID: {process.env.NEXT_PUBLIC_USER_ID}</p>
        </>
    )
}