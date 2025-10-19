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
              className="inline-block text-lg sm:text-xl md:text-2xl text-blue-600 hover:text-blue-800 underline decoration-blue-600 hover:decoration-blue-800 decoration-1 underline-offset-2 transition-all duration-300"
              style={{ fontFamily: '"DM Serif Display", serif' }}
            >
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2 inline text-blue-600" />
              Guduguntla Appaiah Subbamma Kalyana Mandapam, Kodad
            </a>
          </motion.div>
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


