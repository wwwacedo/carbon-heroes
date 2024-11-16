import { Leaf } from "lucide-react";
import Link from "next/link";
import { orbitron } from "@/app/fonts/fonts";

export default function Header() {
  return (
    <header className="m-auto bg-gray-50 border-b">
      <div className="max-w-screen-lg m-auto px-4 py-2 flex items-center">
        <Link href="/" className="flex gap-2 items-center">
          <div className="w-10 h-10 rounded bg-green-100 flex items-center justify-center">
            <Leaf className="w-6 h-6 text-green-600" />
          </div>
          <h2 className={`${orbitron.className}`}>Carbon Heroes</h2>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#about"
          >
            Sobre
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#features"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#how-to-play"
          >
            How to Play
          </Link>
        </nav>
      </div>
    </header>
  );
}
