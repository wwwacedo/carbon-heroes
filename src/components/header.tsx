"use client";

import { useState } from "react";
import { Leaf, Menu, X } from "lucide-react";
import Link from "next/link";
import { orbitron } from "@/app/fonts/fonts";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const path = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (id: string) => {
    if (path !== "/") {
      router.push(`/#${id}`);
    } else {
      const element = document.getElementById(id);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <header className="m-auto bg-gray-50 border-b">
      <div className="container m-auto px-4 py-2 flex items-center">
        <Link href="/" className="flex gap-2 items-center">
          <div className="w-10 h-10 rounded bg-green-100 flex items-center justify-center">
            <Leaf className="w-6 h-6 text-green-600" />
          </div>
          <h2 className={`${orbitron.className}`}>Carbon Heroes</h2>
        </Link>
        <div className="ml-auto flex items-center">
          <nav className="hidden sm:flex gap-6">
            <button
              className="text-sm font-medium hover:underline underline-offset-4"
              onClick={() => scrollToSection("sobre")}
            >
              Sobre
            </button>
            <button
              className="text-sm font-medium hover:underline underline-offset-4"
              onClick={() => scrollToSection("recursos")}
            >
              Recursos
            </button>
            <button
              className="text-sm font-medium hover:underline underline-offset-4"
              onClick={() => scrollToSection("como-jogar")}
            >
              Como jogar
            </button>
          </nav>
          <button onClick={toggleMenu} className="sm:hidden">
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="sm:hidden container m-auto px-4 py-2 flex flex-col gap-3 text-center pb-4"
          >
            <button
              className="text-sm font-medium hover:underline underline-offset-4"
              onClick={() => {
                scrollToSection("sobre");
                toggleMenu();
              }}
            >
              Sobre
            </button>
            <button
              className="text-sm font-medium hover:underline underline-offset-4"
              onClick={() => {
                scrollToSection("recursos");
                toggleMenu();
              }}
            >
              Recursos
            </button>
            <button
              className="text-sm font-medium hover:underline underline-offset-4"
              onClick={() => {
                scrollToSection("como-jogar");
                toggleMenu();
              }}
            >
              Como jogar
            </button>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
