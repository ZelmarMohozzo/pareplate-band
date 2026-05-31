"use client"

import { useState } from "react"

const navItems = [
  { label: "Home", href: "#" },
  { label: "Music", href: "#music" },
  { label: "Tour", href: "#tour" },
  { label: "Merch", href: "#merch" },
  { label: "Contact", href: "#contact" },
]

const socialLinks = [
  { label: "Instagram", href: "#", icon: "IG" },
  { label: "YouTube", href: "#", icon: "YT" },
  { label: "Spotify", href: "#", icon: "SP" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black via-black/80 to-transparent">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="text-white font-black text-xl tracking-[0.3em] uppercase glitch">
            PAREPLATE
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-neutral-400 hover:text-white text-xs uppercase tracking-[0.3em] transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-red-900 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-neutral-500 hover:text-white text-xs font-bold transition-colors duration-300"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`block h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="py-8 flex flex-col items-center gap-6 border-t border-neutral-800 mt-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-neutral-300 hover:text-white text-lg uppercase tracking-[0.3em] transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
            <div className="flex gap-6 mt-4 pt-4 border-t border-neutral-800">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-neutral-500 hover:text-white text-sm font-bold transition-colors duration-300"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
