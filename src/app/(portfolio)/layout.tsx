import Link from "next/link";

export default function PortfolioLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <>
            <header>
                <h3>header hai</h3>
                <nav>
                    <ul>
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/experience">Experience</Link>
                        </li>
                        <li>
                            <Link href="/education">Portfolio</Link>
                        </li>
                        <li>
                            <Link href="/skills">Skills</Link>
                        </li>
                        <li>
                            <Link href="/projects">Projects</Link>
                        </li>
                        <li>
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            {children}
        </>
    );
}
