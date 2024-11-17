'use client'

import { useState } from "react"
import { Leaf, Menu, X } from 'lucide-react'
import Link from "next/link"
import { orbitron } from "@/app/fonts/fonts"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

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
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#sobre"
            >
              Sobre
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#recursos"
            >
              Recursos
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#como-jogar"
            >
              Como jogar
            </Link>
          </nav>
          <button onClick={toggleMenu} className="sm:hidden">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <nav className="sm:hidden container m-auto px-4 py-2 flex flex-col gap-2">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#sobre"
            onClick={toggleMenu}
          >
            Sobre
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#recursos"
            onClick={toggleMenu}
          >
            Recursos
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#como-jogar"
            onClick={toggleMenu}
          >
            Como jogar
          </Link>
        </nav>
      )}
    </header>
  )
}