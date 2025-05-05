'use client'

import Link from 'next/link'
import { Terminal } from 'lucide-react'

type NavLink = 'home' | 'about' | 'contact'

interface NavProps {
  active: NavLink
}

export default function Header({ active }: NavProps) {
  return (
    <header className={`w-full flex items-center justify-between px-4 py-3`}>
      <Link href="/" className="flex items-center gap-2 workingonmyend-logo">
        <div className="p-1 bg-primary/10 rounded">
          <Terminal className="w-4 h-4 text-primary" />
        </div>
        <span className="text-xl font-bold font-mono">
          working<span className="text-primary">onmyend</span>.dev
        </span>
      </Link>

      <nav className="flex gap-6 items-center text-xl">
        <Link
          href="/"
          className={`hover:text-white transition-colors ${active === 'home' ? 'text-white font-semibold underline underline-offset-4' : 'text-gray-400'}`}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={`hover:text-white transition-colors ${active === 'about' ? 'text-white font-semibold underline underline-offset-4' : 'text-gray-400'}`}
        >
          About
        </Link>
        <Link
          href="/contact"
          className={`hover:text-white transition-colors ${active === 'contact' ? 'text-white font-semibold underline underline-offset-4' : 'text-gray-400'}`}
        >
          Contact
        </Link>

      </nav>
    </header>
  )
}
