'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Terminal, Menu, X } from 'lucide-react'

type NavLink = 'home' | 'about' | 'contact'

interface NavProps {
  active: NavLink
}

export default function Header({ active }: NavProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="w-full flex items-center justify-between px-4 py-3 relative z-50">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 workingonmyend-logo">
        <div className="p-1 bg-primary/10 rounded">
          <Terminal className="w-4 h-4 text-primary" />
        </div>
        <span className="text-xl font-bold font-mono">
          working<span className="text-primary">onmyend</span>.dev
        </span>
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-6 items-center text-xl">
        {['home', 'about', 'contact'].map((link) => (
          <Link
            key={link}
            href={link === 'home' ? '/' : `/${link}`}
            className={`capitalize hover:text-white transition-colors ${
              active === link
                ? 'text-white font-semibold underline underline-offset-4'
                : 'text-gray-400'
            }`}
          >
            {link}
          </Link>
        ))}
      </nav>

      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-background border-t border-border shadow-md px-4 py-6 flex flex-col gap-4 md:hidden">
          {['home', 'about', 'contact'].map((link) => (
            <Link
              key={link}
              href={link === 'home' ? '/' : `/${link}`}
              onClick={() => setIsOpen(false)}
              className={`capitalize hover:text-primary transition-colors ${
                active === link ? 'text-primary font-semibold' : 'text-muted-foreground'
              }`}
            >
              {link}
            </Link>
          ))}
        </div>
      )}

    </header>
  )
}
