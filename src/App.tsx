import { motion } from 'motion/react';
import { Heart, MapPin, Calendar, Download } from 'lucide-react';
import { Button } from './components/ui/button';
import { ConfettiEffect } from './components/ConfettiEffect';

export default function App() {
  const generateCalendarFile = () => {
    const event = {
      title: 'Sharath & Meghana Engagement Ceremony',
      description: 'Join us to celebrate the engagement of Sharath & Meghana',
      location: 'Guduguntla Appaya-Subbama (GAS) Kalyana Mandapam, Kodad',
      start: '20251024T053000Z', // 11:00 AM IST = 05:30 UTC
      end: '20251024T083000Z',   // 2:00 PM IST = 08:30 UTC
    };

    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Sharath & Meghana//Engagement//EN
BEGIN:VEVENT
DTSTART:${event.start}
DTEND:${event.end}
SUMMARY:${event.title}
DESCRIPTION:${event.description}
LOCATION:${event.location}
STATUS:CONFIRMED
SEQUENCE:0
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'sharath-meghana-engagement.ics';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-[#FFFDF7] relative overflow-hidden">
      <ConfettiEffect />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20">
        <div 
          className="absolute inset-0 opacity-5 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1758723209129-64e4dbdab59b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZmxvcmFsJTIwdGV4dHVyZSUyMGdvbGR8ZW58MXx8fHwxNzYwNjE4OTYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)' }}
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
            <Heart className="w-12 h-12 sm:w-16 sm:h-16 mx-auto text-[#D4AF37] mb-4 sm:mb-6" fill="#D4AF37" />
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-6xl md:text-8xl mb-4 sm:mb-6 text-[#2B2B2B] px-4"
            style={{ fontFamily: '"DM Serif Display", serif' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Sharath & Meghana
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl mb-3 sm:mb-4 text-[#2B2B2B]/80 max-w-2xl mx-auto px-4"
            style={{ fontFamily: '"Inter", sans-serif' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            Together with their families invite you to celebrate their engagement ceremony
          </motion.p>

          <motion.div
            className="mb-8 sm:mb-12 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 1 }}
          >
            <div className="flex flex-col sm:inline-flex sm:flex-row items-center gap-2 sm:gap-3 text-lg sm:text-xl md:text-2xl text-[#D4AF37] mb-2" style={{ fontFamily: '"DM Serif Display", serif' }}>
              <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="text-center">Friday, October 24, 2025</span>
            </div>
            <p className="text-base sm:text-lg text-[#2B2B2B]/70">11:00 AM</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="px-4"
          >
            <Button
              onClick={generateCalendarFile}
              className="bg-gradient-to-r from-[#E6C47B] to-[#C9A34E] hover:from-[#D4AF37] hover:to-[#B8922E] text-[#2B2B2B] px-6 sm:px-8 py-5 sm:py-6 shadow-xl hover:shadow-2xl transition-all duration-300 w-full sm:w-auto"
            >
              <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Save the Date
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Details Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-white/50 to-[#FFFDF7]">
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-4 sm:mb-6" />
            </motion.div>
            <h2 
              className="text-3xl sm:text-4xl md:text-5xl text-center mb-3 sm:mb-4 text-[#2B2B2B] px-4"
              style={{ fontFamily: '"DM Serif Display", serif' }}
            >
              Celebration Details
            </h2>
            <p className="text-sm sm:text-base text-[#2B2B2B]/60 max-w-xl mx-auto px-4">
              Join us for an unforgettable celebration
            </p>
          </div>

          {/* Main Card */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-[#D4AF37]/20">
            {/* Venue Header with Gold Accent */}
            <div className="bg-gradient-to-r from-[#FFFDF7] to-white p-5 sm:p-8 md:p-10 border-b border-[#D4AF37]/10">
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#E6C47B] to-[#C9A34E] flex items-center justify-center flex-shrink-0 shadow-lg">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl text-[#2B2B2B]" style={{ fontFamily: '"DM Serif Display", serif' }}>
                  Venue
                </h3>
              </div>
              
              <a
                href="https://www.google.com/maps/search/Guduguntla+Appaya-Subbama+Kalyana+Mandapam+Kodad"
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="bg-gradient-to-r from-[#D4AF37]/5 to-[#D4AF37]/10 rounded-lg sm:rounded-xl p-4 sm:p-6 border-2 border-[#D4AF37]/30 active:border-[#D4AF37] sm:group-hover:border-[#D4AF37] transition-all duration-300 sm:group-hover:shadow-lg">
                  <p className="text-xl sm:text-2xl md:text-3xl text-[#2B2B2B] mb-2 active:text-[#D4AF37] sm:group-hover:text-[#D4AF37] transition-colors duration-300 leading-tight" style={{ fontFamily: '"DM Serif Display", serif' }}>
                    Guduguntla Appaya-Subbama (GAS) Kalyana Mandapam
                  </p>
                  <p className="text-base sm:text-lg text-[#2B2B2B]/70">Kodad</p>
                  <div className="flex items-center gap-2 mt-3 text-[#D4AF37]">
                    <MapPin className="w-4 h-4" />
                    <span className="text-xs sm:text-sm">Tap to view on map</span>
                  </div>
                </div>
              </a>
            </div>

            {/* Google Maps Embed - Clickable */}
            <a
              href="https://www.google.com/maps/search/Guduguntla+Appaya-Subbama+Kalyana+Mandapam+Kodad"
              target="_blank"
              rel="noopener noreferrer"
              className="block relative group cursor-pointer"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.0!2d79.96!3d16.99!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDU5JzI0LjAiTiA3OcKwNTcnMzYuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="300"
                style={{ border: 0, pointerEvents: 'none' }}
                className="sm:h-[400px] md:h-[450px]"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Venue Location"
              />
              <div className="absolute inset-0 bg-[#D4AF37]/0 sm:group-hover:bg-[#D4AF37]/10 transition-colors duration-300 flex items-center justify-center">
                <div className="bg-white/95 px-4 sm:px-8 py-3 sm:py-4 rounded-full shadow-2xl opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 sm:gap-3 border border-[#D4AF37]/30 mx-4">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-[#D4AF37]" />
                  <span className="text-sm sm:text-lg text-[#2B2B2B]">Click to open in Maps</span>
                </div>
              </div>
            </a>

            {/* CTA Button */}
            <div className="p-5 sm:p-8 md:p-10 bg-gradient-to-b from-white to-[#FFFDF7]">
              <a
                href="https://www.google.com/maps/search/Guduguntla+Appaya-Subbama+Kalyana+Mandapam+Kodad"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button
                  className="w-full bg-gradient-to-r from-[#E6C47B] to-[#C9A34E] hover:from-[#D4AF37] hover:to-[#B8922E] active:from-[#D4AF37] active:to-[#B8922E] text-[#2B2B2B] py-5 sm:py-6 md:py-7 text-base sm:text-lg shadow-xl hover:shadow-2xl active:shadow-2xl transition-all duration-300 transform sm:hover:scale-[1.02]"
                >
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
                  Get Directions
                </Button>
              </a>
            </div>
          </div>

          {/* Decorative Element */}
          <motion.div
            className="mt-8 sm:mt-10 md:mt-12 flex justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="w-16 sm:w-24 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
          </motion.div>
        </motion.div>
      </section>


    </div>
  );
}
