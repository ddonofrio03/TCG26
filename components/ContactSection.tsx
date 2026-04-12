"use client"

import { motion } from "framer-motion"

export default function ContactSection() {
  return (
    <section className="bg-slate-900 text-white py-12 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-10 right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <motion.h2
              className="text-3xl lg:text-4xl font-black text-white leading-tight mb-4"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Get Connected with TCG
            </motion.h2>
            
            <motion.p
              className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Ready to define your narrative? Let's discuss how we can help you achieve your strategic communications goals.
            </motion.p>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 mb-8"
          >
            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-xs font-bold text-slate-400 tracking-wider uppercase mb-2">Email</h3>
              <a 
                href="mailto:ddonofrio@thecaseygroup.us"
                className="text-base lg:text-lg font-semibold text-white hover:text-primary transition-colors duration-300 block"
              >
                ddonofrio@thecaseygroup.us
              </a>
            </motion.div>

            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-xs font-bold text-slate-400 tracking-wider uppercase mb-2">Call or Text</h3>
              <a 
                href="tel:703-981-6034"
                className="text-base lg:text-lg font-semibold text-white hover:text-primary transition-colors duration-300 block"
              >
                703-981-6034
              </a>
            </motion.div>

            {/* Office */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-xs font-bold text-slate-400 tracking-wider uppercase mb-2">Office</h3>
              <address className="text-base lg:text-lg font-semibold text-white not-italic leading-relaxed">
                Leesburg, VA
              </address>
            </motion.div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
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
          </motion.div>
        </div>
      </div>
    </section>
  )
} 