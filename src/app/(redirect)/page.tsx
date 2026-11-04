import Link from "next/link";
export const metadata = { title: "Philodox", description: "From Thought to Impact." };
export default function RootPage() { return <main className="redirect-page"><meta httpEquiv="refresh" content="0; url=/en/"/><Link href="/en/" className="brand-lockup">philodox<span className="brand-period">.</span></Link><p><Link href="/en/">Continue to Philodox <span aria-hidden="true">→</span></Link></p></main>; }
