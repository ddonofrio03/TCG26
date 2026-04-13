"use client"

export default function InActionHero() {
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
            <span className="block">THE PATH TO</span>
            <span className="text-primary">CLIENT SUCCESS</span>
          </h1>
          <div className="w-32 h-1 bg-primary mx-auto" />
          <p className="text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Real challenges. Strategic solutions. Measurable results.
            Discover how we've helped clients achieve their most ambitious goals.
          </p>
          <div className="pt-4">
            <div className="inline-flex items-center space-x-3 text-slate-400">
              <span className="text-lg font-medium">Explore Below</span>
              <div className="w-6 h-6 border-2 border-slate-400 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 border-b-2 border-r-2 border-slate-400 rotate-45" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent" />
    </section>
  )
}
