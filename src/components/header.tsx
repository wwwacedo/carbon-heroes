import { Leaf } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="h-[60px] flex items-center px-4 m-auto">
      <div className="flex gap-2 items-center max-w-screen-lg">
        <div className="w-10 h-10 rounded bg-green-100 flex items-center justify-center">
          <Leaf className="w-6 h-6 text-green-600" />
        </div>
        <Link href="/">Carbon Heroes</Link>
      </div>
    </header>
  );
}
