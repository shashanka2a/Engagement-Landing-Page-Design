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

      {/* Gentle Sparkle Animation */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#D4AF37] rounded-full opacity-60"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 2) * 30}%`,
            }}
            animate={{
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.5,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 py-12 sm:py-16">
        <motion.div
          className="max-w-5xl mx-auto text-center relative z-10 w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="mb-4 sm:mb-6"
          >
            <motion.span
              className="mx-auto block"
              style={{ fontSize: '3.5rem', lineHeight: 1 }}
              animate={{ rotate: [0, 3, -3, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              aria-hidden
            >
              💍
            </motion.span>
          </motion.div>

          <motion.h1
            className="text-5xl sm:text-7xl md:text-9xl mb-6 sm:mb-8 text-[#1A1A1A] px-4 leading-tight"
            style={{ fontFamily: '"DM Serif Display", serif', fontWeight: 400 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Sharath Reddy & Neetha Meghana
          </motion.h1>

          <motion.div
            className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-[#1A1A1A] max-w-3xl mx-auto px-4 leading-relaxed"
            style={{ fontFamily: '"Inter", sans-serif', fontWeight: 400 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <p className="mb-3">With great joy,</p>
            <p className="underline decoration-[#D4AF37] decoration-2 underline-offset-4 text-[#D4AF37] font-medium mb-3">
              Gogula Somi Reddy & Vimala
            </p>
            <p>cordially invite you to celebrate the engagement</p>
          </motion.div>

          <motion.div
            className="mb-8 sm:mb-10 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 1 }}
          >
            <div className="flex flex-col sm:inline-flex sm:flex-row items-center gap-3 sm:gap-4 text-xl sm:text-2xl md:text-3xl text-[#D4AF37] mb-4" style={{ fontFamily: '"DM Serif Display", serif' }}>
              <Calendar className="w-6 h-6 sm:w-7 sm:h-7" />
              <span className="text-center font-medium">Friday, October 24th, 2025 at 10:00 AM</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="px-4"
          >
            <div className="text-lg sm:text-xl md:text-2xl text-[#1A1A1A] mb-3" style={{ fontFamily: '"Inter", sans-serif' }}>
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6 mr-2 inline text-[#D4AF37]" />
              Guduguntla Appaiah Subbamma Kalyana Mandapam, Kodad
            </div>
            <a
              href="https://maps.app.goo.gl/G2XARim27wVUCk7W9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-base sm:text-lg text-[#D4AF37] hover:text-[#B8922E] underline decoration-[#D4AF37] hover:decoration-[#B8922E] decoration-1 underline-offset-2 transition-all duration-300 hover:scale-105 transform"
              style={{ fontFamily: '"Inter", sans-serif' }}
            >
              View on Google Maps →
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <motion.footer 
        className="px-4 sm:px-6 py-6 text-center text-[#2B2B2B]/60"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <span className="inline-block text-sm" style={{ fontFamily: '"Inter", sans-serif' }}>
          made with <span aria-hidden>💛</span> by{' '}
          <a
            href="http://bloomora.services/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D4AF37] underline-offset-4 hover:underline transition-all duration-300"
          >
            Bloomora
          </a>
        </span>
      </motion.footer>
    </div>
  )
}


