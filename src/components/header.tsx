import Link from "next/link";

export default function Header() {
  return (
    <header className="h-[60px] flex items-center justify-center">
      <Link href="/">Carbon Heroes</Link>
    </header>
  );
}
