"use client"

import { useEffect, useState } from "react"

export function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden scanlines bg-[#0a0a0a]">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: 'contrast(1.1) brightness(0.9)' }}
      >
        <source src="/videos/background.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay on video */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Background texture - subtle grain */}
      <div 
        className="absolute inset-0 opacity-[0.06] z-[1] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Dark vignette overlay */}
      <div 
        className="absolute inset-0 pointer-events-none z-[2]" 
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.85) 100%)'
        }}
      />
      
      {/* Animated background scratches */}
      <div className="absolute inset-0 scratches opacity-10 z-[3]" />
      
      {/* Hero content */}
      <div className={`relative z-[10] text-center px-4 transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Logo/Band name */}
        <div className="glitch relative">
          <img 
            src="/images/pareplate-logo.png" 
            alt="PAREPLATE" 
            className="w-full max-w-[400px] md:max-w-[700px] lg:max-w-[1000px] h-auto mx-auto"
            style={{
              filter: 'drop-shadow(0 0 30px rgba(255,255,255,0.1)) drop-shadow(0 0 60px rgba(139,0,0,0.2))'
            }}
          />
        </div>
        
        {/* Tagline */}
        <p className="mt-8 text-lg md:text-xl tracking-[0.5em] uppercase text-neutral-400 font-light">
          From the abyss • Deathcore
        </p>

        {/* Blood drip decoration */}
        <div className="flex justify-center gap-2 mt-12">
          {[40, 70, 55, 85, 45].map((height, i) => (
            <div 
              key={i} 
              className="w-1 bg-gradient-to-b from-red-900 via-red-950 to-transparent"
              style={{
                height: `${height}px`,
                opacity: 0.8
              }}
            />
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="mt-16 flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#music" 
            className="group relative px-12 py-4 bg-white text-black font-bold uppercase tracking-widest text-sm hover:bg-red-900 hover:text-white transition-all duration-300 border-2 border-white hover:border-red-900"
          >
            <span className="relative z-10">Listen Now</span>
            <div className="absolute inset-0 bg-red-900 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
          </a>
          <a 
            href="#tour" 
            className="px-12 py-4 border-2 border-neutral-600 text-neutral-300 font-bold uppercase tracking-widest text-sm hover:border-white hover:text-white transition-all duration-300"
          >
            Tour Dates
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[10] animate-bounce">
        <div className="w-6 h-10 border-2 border-neutral-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-neutral-600 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
