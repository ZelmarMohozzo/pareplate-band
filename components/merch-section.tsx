"use client"

const merchItems = [
  { name: "Annihilation Tour Tee", price: "$35", category: "Apparel" },
  { name: "Logo Hoodie - Black", price: "$65", category: "Apparel" },
  { name: "Skull Cap Beanie", price: "$25", category: "Accessories" },
  { name: "Vinyl - Annihilation LP", price: "$45", category: "Music" },
]

export function MerchSection() {
  return (
    <section id="merch" className="relative py-24 px-4 bg-[#0a0a0a]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />
      
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <h2 className="text-center text-dirty mb-4">
          <span className="text-5xl md:text-7xl font-black tracking-[0.2em] text-white uppercase">
            MERCH
          </span>
        </h2>
        
        <p className="text-center text-neutral-500 uppercase tracking-[0.3em] text-sm mb-16">
          Wear the darkness
        </p>

        {/* Merch grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {merchItems.map((item, index) => (
            <div 
              key={index}
              className="group cursor-pointer"
            >
              {/* Product image placeholder */}
              <div className="aspect-square bg-neutral-900 border border-neutral-800 group-hover:border-neutral-600 transition-colors relative overflow-hidden mb-4">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-neutral-700 text-xs uppercase tracking-widest">{item.category}</span>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="text-white text-xs uppercase tracking-widest border border-white px-4 py-2">
                    View
                  </span>
                </div>
              </div>
              
              <h3 className="text-white text-sm font-semibold mb-1">{item.name}</h3>
              <p className="text-neutral-500 text-sm">{item.price}</p>
            </div>
          ))}
        </div>

        {/* Shop CTA */}
        <div className="mt-16 text-center">
          <a 
            href="#" 
            className="inline-block px-12 py-4 border-2 border-white text-white font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all duration-300"
          >
            Visit Full Store
          </a>
        </div>
      </div>
    </section>
  )
}
