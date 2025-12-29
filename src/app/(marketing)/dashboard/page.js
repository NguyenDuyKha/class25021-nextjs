import Link from "next/link";
import styles from "./dashboard.module.css";

export default function DashboardPage() {
    // throw new Error("Gia lap loi Dashboard");

    return (
        <div className={styles.container}>
            <h1>Dashboard</h1>
            <p>This is the dashboard page</p>
            <Link href='/dashboard/settings' className={styles.link}>Go to Settings</Link>
            <br/>
            <Link href='/dashboard/profile' className={styles.link}>Go to Profile</Link>
        </div>
    )
}