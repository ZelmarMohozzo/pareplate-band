"use client"

import { useState } from "react"

export function ContactSection() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setEmail("")
  }

  return (
    <section id="contact" className="relative py-24 px-4 bg-[#080808]">
      <div className="absolute inset-0 scratches opacity-10" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section title */}
        <h2 className="text-center text-dirty mb-4">
          <span className="text-5xl md:text-7xl font-black tracking-[0.2em] text-white uppercase">
            JOIN THE CULT
          </span>
        </h2>
        
        <p className="text-center text-neutral-500 uppercase tracking-[0.3em] text-sm mb-12">
          Newsletter • Exclusive content • Early access
        </p>

        {/* Newsletter form */}
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-6 py-4 bg-transparent border-2 border-neutral-700 text-white placeholder:text-neutral-600 focus:border-white focus:outline-none transition-colors uppercase tracking-wider text-sm"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-red-900 text-white font-bold uppercase tracking-widest text-sm hover:bg-red-800 transition-colors border-2 border-red-900"
            >
              Subscribe
            </button>
          </div>
          
          {submitted && (
            <p className="mt-4 text-center text-neutral-400 text-sm uppercase tracking-wider">
              Welcome to the darkness.
            </p>
          )}
        </form>

        {/* Social links */}
        <div className="mt-16 flex justify-center gap-8">
          {[
            { name: "Instagram", handle: "@pareplate" },
            { name: "YouTube", handle: "/pareplate" },
            { name: "Spotify", handle: "PAREPLATE" },
            { name: "TikTok", handle: "@pareplate" },
          ].map((social) => (
            <a
              key={social.name}
              href="#"
              className="text-center group"
            >
              <span className="block text-neutral-500 text-xs uppercase tracking-widest group-hover:text-white transition-colors">
                {social.name}
              </span>
              <span className="block text-neutral-700 text-xs mt-1">
                {social.handle}
              </span>
            </a>
          ))}
        </div>

        {/* Contact info */}
        <div className="mt-16 text-center space-y-2">
          <p className="text-neutral-600 text-xs uppercase tracking-widest">
            Booking & Press
          </p>
          <a href="mailto:booking@pareplate.com" className="text-neutral-400 hover:text-white text-sm transition-colors">
            booking@pareplate.com
          </a>
        </div>
      </div>
    </section>
  )
}
