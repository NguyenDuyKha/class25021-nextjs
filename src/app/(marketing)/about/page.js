import styles from './about.module.css';

export const metadata = {
    title: "Ve chung toi",
    description: "Day la trang gioi thieu ve chung toi"
}

export default function AboutPage() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>About Us</h1>
            <p>This is the about page</p>
        </div>
    );
}