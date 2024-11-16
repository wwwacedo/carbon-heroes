import { Leaf } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="m-auto bg-gray-50 border-b">
      <div className="max-w-screen-lg m-auto px-4 py-2">
        <Link href="/" className="flex gap-2 items-center">
          <div className="w-10 h-10 rounded bg-green-100 flex items-center justify-center">
            <Leaf className="w-6 h-6 text-green-600" />
          </div>
          Carbon Heroes
        </Link>
      </div>
    </header>
  );
}
