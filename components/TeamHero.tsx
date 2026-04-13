"use client"

export default function TeamHero() {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden flex items-center pt-24 pb-20 lg:pt-32 lg:pb-28">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/15 rounded-full blur-3xl" />
      </div>
      <div className="absolute top-1/4 right-1/3 w-3 h-3 bg-primary/60 rounded-full" />
      <div className="absolute bottom-1/3 left-1/5 w-2 h-2 bg-accent/50 rounded-full" />

      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-tight tracking-tighter">
            <span className="block">OUR</span>
            <span className="text-primary">TEAM</span>
          </h1>
          <div className="w-32 h-1 bg-primary mx-auto" />
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-4xl mx-auto pt-4">
            {["Depth of Experience", "Experts in their Fields", "Team Players"].map((pillar) => (
              <div key={pillar} className="text-center">
                <div className="w-3 h-3 bg-primary rounded-full mx-auto mb-4" />
                <h3 className="text-xl lg:text-2xl font-semibold text-slate-300">{pillar}</h3>
              </div>
            ))}
          </div>
          <p className="text-xl lg:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed pt-4">
            Meet the strategic minds behind The Casey Group's success. Each team member brings
            specialized expertise and unwavering commitment to delivering exceptional results.
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent" />
    </section>
  )
}
