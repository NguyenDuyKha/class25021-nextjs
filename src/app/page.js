import Image from "next/image";
import styles from "./page.module.css";
import InteractiveWelcome from "@/components/InteractiveWelcome/InteractiveWelcome";
import ServerComponent from "@/components/ServerComponent/ServerComponent";
import ClientComponent from "@/components/ClientComponent/ClientComponent";

export default async function Home({ searchParams }) {
    const { category = "phone", sort = "A-Z" } = await searchParams;
    console.log(category, sort );

    const nonSerializableProp = () => {
        console.log("Hello from a non-serializable Prop");
        return "Hello from a non-serializable Prop";
    }

    return (
        <>
            <h1>Welcome to Next.js</h1>
            {/* <InteractiveWelcome/> */}
            <InteractiveWelcome>
                <ServerComponent />
            </InteractiveWelcome>

            <ClientComponent serializableProp={"Hello World"} />
        </>
    );
}
