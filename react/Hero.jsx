import React, { useState, useEffect } from 'react';

/**
 * Santiago Exchange - Hero & Navbar Component
 * 
 * Dependencies:
 * - Tailwind CSS
 * - Lucide React (or any SVG icons for the badges)
 * 
 * Required Tailwind Config (tailwind.config.js):
 * module.exports = {
 *   theme: {
 *     extend: {
 *       colors: {
 *         brand: {
 *           navy: '#0B1220',
 *           gradStart: '#0F1B2D',
 *           gradEnd: '#142742',
 *           turquoise: '#16A7C8',
 *           purple: '#5B5CF6',
 *           purpleHover: '#6C6DF9',
 *           textMain: '#F1F5F9',
 *           textSec: '#9AA6B2',
 *           border: '#1E2C45'
 *         }
 *       },
 *       fontFamily: {
 *         sans: ['Inter', 'sans-serif'],
 *         display: ['"Space Grotesk"', 'sans-serif'],
 *       },
 *       boxShadow: {
 *         glow: '0 0 20px rgba(91, 92, 246, 0.4)',
 *         img: '0 30px 60px rgba(0,0,0,0.35)',
 *       },
 *       animation: {
 *         'float': 'float 6s ease-in-out infinite',
 *         'float-delayed': 'float 6s ease-in-out 2s infinite',
 *         'float-delayed-2': 'float 6s ease-in-out 4s infinite',
 *       },
 *       keyframes: {
 *         float: {
 *           '0%, 100%': { transform: 'translateY(0)' },
 *           '50%': { transform: 'translateY(-15px)' },
 *         }
 *       }
 *     }
 *   }
 * }
 */

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-navy/90 backdrop-blur-md border-b border-brand-border py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo Left - New Structure */}
        <a href="#" className="flex items-center gap-4 cursor-pointer">
          <img src="/assets/images/logo-square-new.png" alt="Santiago Exchange Icon" className="h-20 w-20 object-contain" />
          <img src="/assets/images/logo-white-text.png" alt="Santiago Exchange Text" className="h-24 w-auto object-contain" />
        </a>

        {/* Center Links (Desktop) */}
        <div className="hidden lg:flex items-center gap-8">
          {['Residences', 'Community', 'Experiences', 'Chile Guide'].map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-sm font-medium text-brand-textMain hover:text-brand-turquoise transition-colors">
              {link}
            </a>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-6">
          <a href="#login" className="hidden sm:block text-sm font-medium text-brand-textMain hover:text-brand-turquoise transition-colors">Log in</a>
          <a href="#reserva" className="bg-brand-turquoise hover:bg-[#128a9e] text-white text-sm font-semibold py-2.5 px-6 rounded-full transition-all shadow-[0_4px_14px_0_rgba(22,167,200,0.39)] hover:-translate-y-0.5">Reservar</a>
        </div>
      </div>
    </nav>
  );
};

export const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-brand-gradStart to-brand-gradEnd overflow-hidden flex items-center pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center relative z-10">
        
        {/* Left Column: Text Content */}
        <div className="flex flex-col items-start gap-6 max-w-xl">
          {/* Glowing Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-purple/50 bg-brand-purple/10 text-brand-purple shadow-glow">
            <span className="text-sm">✨</span>
            <span className="text-sm font-medium text-brand-textMain">Únete a los más de 5.000 estudiantes que ya se han alojado con nosotros</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-[4rem] font-bold leading-tight tracking-tight text-white">
            Vive tu <br />
            experiencia de <br />
            <span className="text-brand-turquoise">intercambio</span> en <br />
            Santiago.
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-brand-textSec leading-relaxed">
            Residencias para estudiantes internacionales completamente equipadas y ubicadas cerca de las principales universidades de Santiago.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-brand-turquoise hover:bg-[#128a9e] text-white font-medium py-3.5 px-8 rounded-full transition-all shadow-[0_4px_14px_0_rgba(22,167,200,0.39)] hover:-translate-y-0.5">
              Explorar residencias
            </button>
            <button className="w-full sm:w-auto bg-transparent border border-brand-border hover:bg-brand-border/50 text-white font-medium py-3.5 px-8 rounded-full transition-all">
              Reservar habitación
            </button>
          </div>
        </div>

        {/* Right Column: Image & Floating Elements */}
                        <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square flex items-center justify-center">
                            
                            {/* Main Image Container */}
                            <div className="relative w-[125%] md:w-[135%] lg:w-[145%] xl:w-[165%] animate-float origin-center z-10 transition-transform">
                                <img src="/assets/images/hero-1.png" alt="Estudiante Internacional con mochila" className="w-full h-auto object-contain drop-shadow-2xl" />
                            </div>

                            {/* Floating Glass Pill 1 (Booking) - Movido más abajo */}
                            <div className="absolute top-[40%] left-1/2 -translate-x-1/2 md:translate-x-0 md:-left-[10%] md:top-[50%] lg:-left-[15%] bg-brand-navy/60 backdrop-blur-md border border-white/10 px-5 py-3 rounded-2xl flex items-center gap-3 animate-float-delayed shadow-xl z-20">
            <div className="w-10 h-10 rounded-full bg-brand-turquoise/20 flex items-center justify-center text-xl">📅</div>
            <div>
              <p className="text-xs text-brand-textSec font-semibold uppercase tracking-wider">BOOKING</p>
              <p className="text-sm font-semibold text-white">Reserva Inmediata</p>
            </div>
          </div>

                            {/* Floating Glass Pill 2 */}
                            <div className="absolute bottom-[20%] -right-[5%] md:right-[0%] lg:-right-[10%] bg-brand-navy/60 backdrop-blur-md border border-white/10 px-5 py-3 rounded-2xl flex items-center gap-3 animate-float shadow-xl z-20">
            <div className="w-10 h-10 rounded-full bg-brand-purple/20 flex items-center justify-center text-xl">🌍</div>
            <div>
              <p className="text-xs text-brand-textSec font-semibold uppercase tracking-wider">VIBE</p>
              <p className="text-sm font-semibold text-white">Comunidad Global</p>
            </div>
          </div>

                            {/* Floating Glass Pill 3 (Llegada) - Movido un poco más arriba para tocar la silueta */}
                            <div className="absolute -bottom-[5%] left-[5%] md:left-[10%] md:bottom-[5%] lg:-left-[5%] bg-brand-navy/60 backdrop-blur-md border border-white/10 px-5 py-3 rounded-2xl flex items-center gap-3 animate-float-delayed-2 shadow-xl z-20">
            <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center text-xl">📍</div>
            <div>
              <p className="text-xs text-brand-textSec font-semibold uppercase tracking-wider">LLEGADA</p>
              <p className="text-sm font-semibold text-white">Todo listo en tu habitación</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default function SantiagoExchangeApp() {
  return (
    <div className="font-sans antialiased bg-brand-navy text-brand-textMain selection:bg-brand-turquoise/30 selection:text-white">
      <Navbar />
      <Hero />
    </div>
  );
}
