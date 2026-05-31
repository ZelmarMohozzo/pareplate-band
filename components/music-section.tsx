"use client"

const releases = [
  {
    title: "ANNIHILATION",
    type: "Album",
    year: "2025",
    tracks: ["Void Walker", "Flesh Prison", "No Salvation", "Bloodlust", "Eternal Damnation"]
  },
  {
    title: "DESCENT",
    type: "EP",
    year: "2024",
    tracks: ["Into the Abyss", "Shattered", "Carnage"]
  },
  {
    title: "FIRST BLOOD",
    type: "Single",
    year: "2023",
    tracks: ["First Blood"]
  },
]

export function MusicSection() {
  return (
    <section id="music" className="relative py-24 px-4 bg-[#0d0d0d] scanlines">
      <div className="absolute inset-0 scratches opacity-20" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section title */}
        <h2 className="text-center text-dirty mb-4">
          <span className="text-5xl md:text-7xl font-black tracking-[0.2em] text-white uppercase">
            MUSIC
          </span>
        </h2>
        
        <p className="text-center text-neutral-500 uppercase tracking-[0.3em] text-sm mb-16">
          Releases from the void
        </p>

        {/* Releases grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {releases.map((release, index) => (
            <div 
              key={index}
              className="group relative bg-[#111] border border-neutral-800 hover:border-neutral-600 transition-all duration-500"
            >
              {/* Album art placeholder - grayscale distorted look */}
              <div className="aspect-square bg-gradient-to-br from-neutral-900 via-neutral-800 to-black relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl font-black text-neutral-700 opacity-50 group-hover:scale-110 transition-transform duration-500">
                    {release.title.charAt(0)}
                  </span>
                </div>
                {/* Distorted overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                
                {/* Play overlay on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60">
                  <button className="w-16 h-16 border-2 border-white flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                    <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Release info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-neutral-500 text-xs uppercase tracking-widest">{release.type}</span>
                  <span className="text-neutral-600 text-xs">{release.year}</span>
                </div>
                <h3 className="text-white font-bold text-xl tracking-wider uppercase mb-4">
                  {release.title}
                </h3>
                
                {/* Track list */}
                <ul className="space-y-2">
                  {release.tracks.map((track, i) => (
                    <li key={i} className="flex items-center gap-3 text-neutral-500 text-sm group/track hover:text-white transition-colors cursor-pointer">
                      <span className="text-neutral-700 text-xs">{String(i + 1).padStart(2, '0')}</span>
                      <span>{track}</span>
                    </li>
                  ))}
                </ul>

                {/* Stream links */}
                <div className="mt-6 pt-4 border-t border-neutral-800 flex gap-4">
                  <button className="text-neutral-500 hover:text-white text-xs uppercase tracking-wider transition-colors">
                    Spotify
                  </button>
                  <button className="text-neutral-500 hover:text-white text-xs uppercase tracking-wider transition-colors">
                    Apple
                  </button>
                  <button className="text-neutral-500 hover:text-white text-xs uppercase tracking-wider transition-colors">
                    YouTube
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
