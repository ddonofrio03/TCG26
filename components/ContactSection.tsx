"use client"


export default function ContactSection() {
  return (
    <section className="bg-slate-900 text-white py-12 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0">
        <div
          className="absolute top-10 right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div
            className="text-center mb-8"
          >
            <h2
              className="text-3xl lg:text-4xl font-black text-white leading-tight mb-4"
            >
              Get Connected with TCG
            </h2>
            
            <p
              className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed"
            >
              Ready to define your narrative? Let's discuss how we can help you achieve your strategic communications goals.
            </p>
          </div>

          {/* Contact Information */}
          <div
            className="grid md:grid-cols-3 gap-8 mb-8"
          >
            {/* Email */}
            <div
              className="text-center"
            >
              <h3 className="text-xs font-bold text-slate-400 tracking-wider uppercase mb-2">Email</h3>
              <a 
                href="mailto:ddonofrio@thecaseygroup.us"
                className="text-base lg:text-lg font-semibold text-white hover:text-primary transition-colors duration-300 block"
              >
                ddonofrio@thecaseygroup.us
              </a>
            </div>

            {/* Phone */}
            <div
              className="text-center"
            >
              <h3 className="text-xs font-bold text-slate-400 tracking-wider uppercase mb-2">Call or Text</h3>
              <a 
                href="tel:703-981-6034"
                className="text-base lg:text-lg font-semibold text-white hover:text-primary transition-colors duration-300 block"
              >
                703-981-6034
              </a>
            </div>

            {/* Offices */}
            <div
              className="text-center"
            >
              <h3 className="text-xs font-bold text-slate-400 tracking-wider uppercase mb-2">Offices</h3>
              <address className="text-base lg:text-lg font-semibold text-white not-italic leading-relaxed">
                Leesburg, VA & Murrells Inlet, SC
              </address>
            </div>
          </div>

          {/* Call to Action */}
          <div
            className="text-center"
          >
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <a
                href="mailto:ddonofrio@thecaseygroup.us"
                className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors cursor-pointer group font-semibold"
              >
                <span>EMAIL</span>
              </a>

              <a
                href="tel:703-981-6034"
                className="inline-flex items-center px-6 py-3 border border-slate-600 text-white rounded-lg hover:border-slate-400 transition-colors cursor-pointer group font-semibold"
              >
                <span>CALL</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
