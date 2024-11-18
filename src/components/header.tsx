"use client";

import { useState } from "react";
import { Leaf, Menu, X } from "lucide-react";
import Link from "next/link";
import { orbitron } from "@/app/fonts/fonts";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

export default function Header() {
  const path = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="m-auto bg-gray-50 border-b">
      <div className="container m-auto px-4 py-2 flex items-center">
        <Link href="/" className="flex gap-2 items-center">
          <div className="w-10 h-10 rounded bg-green-100 flex items-center justify-center">
            <Leaf className="w-6 h-6 text-green-600" />
          </div>
          <h2 className={`${orbitron.className}`}>Carbon Heroes</h2>
        </Link>
        {path === "/" && (
          <div className="ml-auto flex items-center">
            <nav className="hidden sm:flex gap-6">
              <Link href={"/#sobre"}>
                <Button variant={"link"}>Sobre</Button>
              </Link>
              <Link href={"/#recursos"}>
                <Button variant={"link"}>Recursos</Button>
              </Link>
              <Link href={"/#como-jogar"}>
                <Button variant={"link"}>Como jogar</Button>
              </Link>
            </nav>
            <Button onClick={toggleMenu} className="sm:hidden">
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        )}
      </div>
      <AnimatePresence>
        {isMenuOpen && path === "/" && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="sm:hidden container m-auto px-4  flex flex-col text-center pb-2"
          >
            <Link href={"/#sobre"}>
              <Button variant={"link"}>Sobre</Button>
            </Link>
            <Link href={"/#recursos"}>
              <Button variant={"link"}>Recursos</Button>
            </Link>
            <Link href={"/#como-jogar"}>
              <Button variant={"link"}>Como jogar</Button>
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
