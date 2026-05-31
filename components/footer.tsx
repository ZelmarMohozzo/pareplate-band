export function Footer() {
  return (
    <footer className="py-12 px-4 bg-black border-t border-neutral-900">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo */}
          <div className="text-center md:text-left">
            <span className="text-white font-black text-2xl tracking-[0.3em] uppercase">
              PAREPLATE
            </span>
            <p className="text-neutral-600 text-xs uppercase tracking-widest mt-2">
              Deathcore • Est. 2023
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            {["Privacy", "Terms", "Press Kit"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-neutral-600 hover:text-neutral-400 text-xs uppercase tracking-widest transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-neutral-700 text-xs uppercase tracking-wider">
              © 2026 PAREPLATE
            </p>
            <p className="text-neutral-800 text-xs mt-1">
              All rights reserved
            </p>
          </div>
        </div>

        {/* Bottom decoration */}
        <div className="mt-12 flex justify-center">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <div 
                key={i} 
                className="w-1 h-8 bg-gradient-to-b from-neutral-800 to-transparent"
                style={{ opacity: 1 - i * 0.2 }}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
