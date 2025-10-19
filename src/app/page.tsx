"use client"

import { motion } from 'motion/react'
import { Heart, MapPin, Calendar, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ConfettiEffect } from '@/components/ConfettiEffect'

export default function Page() {
  const generateCalendarFile = () => {
    const event = {
      title: 'Sharath Reddy & Neetha Meghana Engagement Ceremony',
      description: 'Join us to celebrate the engagement of Sharath Reddy & Neetha Meghana',
      location: 'Guduguntla Appaiah Subbamma Kalyana Mandapam, Kodad',
      start: '20251024T043000Z',
      end: '20251024T073000Z',
    }

    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Sharath Reddy & Neetha Meghana//Engagement//EN
BEGIN:VEVENT
DTSTART:${event.start}
DTEND:${event.end}
SUMMARY:${event.title}
DESCRIPTION:${event.description}
LOCATION:${event.location}
STATUS:CONFIRMED
SEQUENCE:0
END:VEVENT
END:VCALENDAR`

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' })
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = 'sharath-reddy-neetha-meghana-engagement.ics'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-screen bg-[#FFFDF7] relative overflow-hidden">
      <ConfettiEffect />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20">
        <div
          className="absolute inset-0 opacity-5 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1758723209129-64e4dbdab59b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZmxvcmFsJTIwdGV4dHVyZSUyMGdvbGR8ZW58MXx8fHwxNzYwNjE4OTYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)',
          }}
        />

        <motion.div
          className="max-w-4xl mx-auto text-center relative z-10 w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="mb-6 sm:mb-8"
          >
            <span
              className="mx-auto mb-4 sm:mb-6 block"
              style={{ fontSize: '3rem', lineHeight: 1 }}
              aria-hidden
            >
              💍
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-6xl md:text-8xl mb-4 sm:mb-6 text-[#2B2B2B] px-4"
            style={{ fontFamily: '"DM Serif Display", serif' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Sharath Reddy & Neetha Meghana.
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl mb-3 sm:mb-4 text-[#2B2B2B]/80 max-w-2xl mx-auto px-4"
            style={{ fontFamily: '"Inter", sans-serif' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            With great joy,<br />
            <span className="underline decoration-[#D4AF37] decoration-2 underline-offset-4">
              Gogula Somi Reddy & Vimala
            </span>
            <br />
            cordially invite you to celebrate the engagement
          </motion.p>

          <motion.div
            className="mb-8 sm:mb-12 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 1 }}
          >
            <div className="flex flex-col sm:inline-flex sm:flex-row items-center gap-2 sm:gap-3 text-lg sm:text-xl md:text-2xl text-[#D4AF37] mb-2" style={{ fontFamily: '"DM Serif Display", serif' }}>
              <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="text-center">Friday, October 24th, 2025 at 10:00 AM</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="px-4"
          >
            <a
              href="https://maps.app.goo.gl/G2XARim27wVUCk7W9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-lg sm:text-xl md:text-2xl text-[#D4AF37] hover:text-[#B8922E] underline decoration-[#D4AF37] hover:decoration-[#B8922E] decoration-2 underline-offset-4 transition-all duration-300"
              style={{ fontFamily: '"DM Serif Display", serif' }}
            >
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6 mr-2 inline" />
              Guduguntla Appaiah Subbamma Kalyana Mandapam, Kodad
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Google Maps Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-b from-white/50 to-[#FFFDF7]">
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Google Maps Embed */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-[#D4AF37]/20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.0!2d79.96!3d16.99!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDU5JzI0LjAiTiA3OcKwNTcnMzYuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              className="w-full"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Guduguntla Appaiah Subbamma Kalyana Mandapam Location"
            />
            
            {/* Get Directions Button */}
            <div className="p-6 sm:p-8 bg-gradient-to-b from-white to-[#FFFDF7]">
              <a
                href="https://maps.app.goo.gl/G2XARim27wVUCk7W9"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button className="w-full bg-gradient-to-r from-[#E6C47B] to-[#C9A34E] hover:from-[#D4AF37] hover:to-[#B8922E] text-[#2B2B2B] py-4 sm:py-5 text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
                  Get Directions
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </section>
      {/* Footer */}
      <footer className="px-4 sm:px-6 py-8 text-center text-[#2B2B2B]/70">
        <span className="inline-block" style={{ fontFamily: '"Inter", sans-serif' }}>
          made with <span aria-hidden>💛</span> by{' '}
          <a
            href="http://bloomora.services/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D4AF37] underline-offset-4 hover:underline"
          >
            Bloomora
          </a>
        </span>
      </footer>
    </div>
  )
}


