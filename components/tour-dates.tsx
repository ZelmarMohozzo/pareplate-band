"use client"

const tourDates = [
  { date: "15 JUN", day: "SAT", venue: "Inferno Club", city: "Madrid, Spain", tickets: true, vip: true },
  { date: "22 JUN", day: "SAT", venue: "Darkness Arena", city: "Barcelona, Spain", tickets: true, vip: true },
  { date: "28 JUN", day: "FRI", venue: "Metal Fest 2026", city: "Munich, Germany", tickets: true, vip: false },
  { date: "05 JUL", day: "SAT", venue: "Brutal Assault", city: "Prague, Czechia", tickets: true, vip: true },
  { date: "12 JUL", day: "SAT", venue: "Hellfest", city: "Clisson, France", tickets: false, vip: false },
  { date: "19 JUL", day: "SAT", venue: "Bloodstock", city: "Derby, UK", tickets: true, vip: true },
  { date: "26 JUL", day: "SAT", venue: "Graspop", city: "Dessel, Belgium", tickets: true, vip: false },
]

export function TourDates() {
  return (
    <section id="tour" className="relative py-24 px-4 bg-[#0a0a0a]">
      {/* Section decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />
      
      <div className="max-w-5xl mx-auto">
        {/* Section title */}
        <h2 className="text-center text-dirty">
          <span className="text-5xl md:text-7xl font-black tracking-[0.2em] text-white uppercase">
            TOUR DATES
          </span>
        </h2>
        
        <p className="text-center text-neutral-500 uppercase tracking-[0.3em] text-sm mt-4 mb-16">
          2026 European Devastation Tour
        </p>

        {/* Tour list */}
        <div className="space-y-0">
          {tourDates.map((show, index) => (
            <div 
              key={index}
              className="group grid grid-cols-12 gap-4 py-6 border-b border-neutral-800 hover:bg-neutral-900/50 transition-colors duration-300 items-center"
            >
              {/* Date */}
              <div className="col-span-3 md:col-span-2">
                <span className="text-white font-bold text-lg md:text-xl tracking-wide">{show.date}</span>
                <span className="block text-neutral-500 text-xs uppercase tracking-widest">{show.day}</span>
              </div>

              {/* Venue */}
              <div className="col-span-9 md:col-span-4">
                <span className="text-white font-semibold text-sm md:text-base">{show.venue}</span>
              </div>

              {/* City */}
              <div className="col-span-6 md:col-span-3">
                <span className="text-neutral-400 text-sm">{show.city}</span>
              </div>

              {/* Actions */}
              <div className="col-span-6 md:col-span-3 flex justify-end gap-2">
                {show.tickets ? (
                  <>
                    <button className="px-4 py-2 bg-red-900 text-white text-xs font-bold uppercase tracking-wider hover:bg-red-800 transition-colors">
                      Tickets
                    </button>
                    {show.vip && (
                      <button className="px-4 py-2 border border-neutral-600 text-neutral-300 text-xs font-bold uppercase tracking-wider hover:border-white hover:text-white transition-colors">
                        VIP
                      </button>
                    )}
                  </>
                ) : (
                  <span className="px-4 py-2 text-neutral-600 text-xs font-bold uppercase tracking-wider">
                    Sold Out
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* More dates CTA */}
        <div className="mt-12 text-center">
          <p className="text-neutral-500 text-sm uppercase tracking-widest mb-4">
            More dates coming soon
          </p>
          <button className="text-neutral-400 hover:text-white text-xs uppercase tracking-[0.3em] border-b border-neutral-600 hover:border-white pb-1 transition-colors">
            Get Notified
          </button>
        </div>
      </div>
    </section>
  )
}
