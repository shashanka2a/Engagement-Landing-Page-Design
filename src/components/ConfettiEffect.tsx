"use client";
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface Confetti {
  id: number;
  x: number;
  delay: number;
  duration: number;
  size: number;
}

export function ConfettiEffect() {
  const [confetti, setConfetti] = useState<Confetti[]>([]);

  useEffect(() => {
    // Reduce confetti count on mobile devices
    const isMobile = window.innerWidth < 640;
    const count = isMobile ? 15 : 30;
    
    const items: Confetti[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 2,
      size: 4 + Math.random() * 4,
    }));
    setConfetti(items);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {confetti.map((item) => (
        <motion.div
          key={item.id}
          className="absolute rounded-full"
          style={{
            left: `${item.x}%`,
            width: item.size,
            height: item.size,
            background: `linear-gradient(135deg, #E6C47B, #D4AF37)`,
            boxShadow: '0 0 6px rgba(212, 175, 55, 0.6)',
          }}
          initial={{ y: -20, opacity: 0 }}
          animate={{
            y: window.innerHeight + 20,
            opacity: [0, 1, 1, 0],
            x: [0, Math.sin(item.id) * 50, 0],
          }}
          transition={{
            duration: item.duration,
            delay: item.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
}
