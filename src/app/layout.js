import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Script from "next/script";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "My Blog",
    description: "Blog chia se kien thuc ve lap trinh va cong nghe moi nhat",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable}`}>
                <header className="header">
                    <h1>LetDiv</h1>
                    <nav className="nav">
                        <Link href="/" className="nav-link">Home</Link>
                        <Link href="/about" className="nav-link">About</Link>
                        <Link href="/contact" className="nav-link">Contact</Link>
                        <Link href="/dashboard" className="nav-link">Dashboard</Link>
                    </nav>
                </header>
                <main className="main-content">
                    {children}
                </main>
                <footer className="footer">
                    &copy;2025 LetDiv Copyright
                </footer>
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-ZPM365DHFQ"
                    strategy="lazyOnload"
                />
                <Script id="google-analytics" strategy="lazyOnload">
                    {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-ZPM365DHFQ');
                    `}
                </Script>
            </body>
        </html>
    );
}
