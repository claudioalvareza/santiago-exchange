import React from 'react';

/**
 * Santiago Exchange - Homepage Sections
 * 
 * Dependencies:
 * - Tailwind CSS
 * - The `tailwind.config.js` defined in Hero.jsx
 */

// 3. Trust & Benefits Section
export const TrustSection = () => {
  const benefits = [
    { icon: "🎓", title: "Cerca de universidades", desc: "Ubicaciones estratégicas a pasos del metro." },
    { icon: "🌐", title: "Comunidad internacional", desc: "Conoce estudiantes de todo el mundo." },
    { icon: "🛡️", title: "Seguro y equipado", desc: "Internet alta velocidad y asistencia 24/7." },
    { icon: "📅", title: "Reserva flexible", desc: "Arriendos por el semestre académico." }
  ];

  return (
    <section className="py-20 bg-brand-navy border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-sm font-semibold text-brand-textSec uppercase tracking-widest mb-10">
          Estudiantes de estas universidades ya viven con nosotros
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 mb-20 grayscale">
          {['UC', 'U de Chile', 'UDP', 'UNAB', 'UANDES'].map(uni => (
            <h3 key={uni} className="font-display font-bold text-2xl text-brand-textMain">{uni}</h3>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <div key={i} className="bg-brand-navyLight/30 backdrop-blur-md border border-white/5 p-6 rounded-2xl hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 rounded-full bg-brand-turquoise/10 flex items-center justify-center text-2xl mb-4">{b.icon}</div>
              <h4 className="font-display font-semibold text-lg text-white mb-2">{b.title}</h4>
              <p className="text-brand-textSec text-sm">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 4. Residences Section
export const ResidencesSection = () => {
  const residences = [
    {
      id: 1,
      name: "Residencia Metro Salvador",
      location: "Providencia · Metro Salvador",
      near: "Cerca de: Universidad Católica, U de Chile",
      img: "/assets/images/Edificio Metro Salvador/105.jpg",
      tag: "Top Rated"
    },
    {
      id: 2,
      name: "Residencia Baquedano",
      location: "Providencia · Metro Baquedano",
      near: "Cerca de: UNAB, U de Chile, UDP",
      img: "/assets/images/Edificio Baquedano/37.jpg",
      tag: "Muy Céntrico"
    },
    {
      id: 3,
      name: "Estudios Salvador Sur",
      location: "Providencia · Metro Salvador",
      near: "Cerca de: Universidad Católica, Barrio Italia",
      img: "/assets/images/Edificio Metro Salvador 2/IMG_1054.jpg",
      tag: "Nuevo"
    }
  ];

  return (
    <section id="residencias" className="py-24 bg-brand-navyLight">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Nuestras Residencias</h2>
            <p className="text-brand-textSec text-lg">Descubre nuestras residencias en los mejores barrios. Diseñadas para tu comodidad, estudio y entretención en un entorno seguro.</p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-brand-turquoise font-medium hover:text-white transition-colors">
            Ver todas <span className="text-xl">→</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {residences.map(res => (
            <div key={res.id} className="group relative bg-brand-navy rounded-3xl overflow-hidden border border-brand-border hover:border-brand-turquoise/50 transition-colors shadow-card">
              <div className="relative aspect-[4/3] overflow-hidden">
                <div className="absolute top-4 left-4 z-10 bg-brand-turquoise text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
                  {res.tag}
                </div>
                <img src={res.img} alt={res.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy to-transparent opacity-80"></div>
              </div>
              <div className="p-6 relative -mt-12 z-10">
                <h3 className="font-display text-2xl font-bold text-white mb-2">{res.name}</h3>
                <p className="text-brand-turquoise text-sm font-medium mb-3 flex items-center gap-2">
                  <span>📍</span> {res.location}
                </p>
                <p className="text-brand-textSec text-sm mb-6 flex items-start gap-2">
                  <span>🎓</span> {res.near}
                </p>
                <button className="w-full block text-center bg-white/5 hover:bg-brand-turquoise text-white font-medium py-3 rounded-xl transition-colors border border-white/10 group-hover:border-transparent">
                  Explorar Residencia
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 5. Experience Section
export const ExperienceSection = () => {
  return (
    <section id="comunidad" className="py-24 bg-brand-navy overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Area */}
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">Más que dormir.<br/>Una <span className="text-brand-purple">vida por vivir.</span></h2>
            <p className="text-brand-textSec text-lg mb-8 leading-relaxed">
              Vivir en Santiago Exchange significa formar parte de una comunidad global. Organiza viajes, disfruta de asados y conoce personas de distintos países mientras exploras Chile.
            </p>
            
            <ul className="space-y-4 mb-8">
              {['Comunidad internacional', 'Experiencias y eventos sociales', 'Acompañamiento local', 'Viajes organizados'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-brand-textMain">
                  <div className="w-6 h-6 rounded-full bg-brand-purple/20 flex items-center justify-center text-brand-purple text-xs">✦</div>
                  {item}
                </li>
              ))}
            </ul>
            
            <button className="flex items-center gap-2 text-white bg-brand-purple hover:bg-brand-purpleHover px-6 py-3 rounded-full font-medium transition-all">
              Ver Galería de Experiencias
            </button>
          </div>

          {/* Collage Area */}
          <div className="relative h-[500px] w-full">
            <div className="absolute top-0 right-0 w-[70%] h-[75%] rounded-[24px] overflow-hidden shadow-img z-10">
              <img src="/assets/images/experiencias.png" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-0 left-0 w-[55%] h-[55%] rounded-[24px] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.6)] z-20 border-8 border-brand-navy">
              <img src="/assets/images/comunidad.png" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-10 -right-5 w-[45%] h-[45%] rounded-[24px] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.6)] z-0 border-8 border-brand-navy opacity-80">
              <img src="/assets/images/santiago.png" className="w-full h-full object-cover" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// 6. Explore Chile
export const ExploreChile = () => {
  const places = [
    { name: "Patagonia", img: "/assets/images/patagonia.png", desc: "El fin del mundo" },
    { name: "Atacama", img: "/assets/images/atacama.png", desc: "El desierto más árido" },
    { name: "Valparaíso", img: "/assets/images/valparaiso.png", desc: "Cultura y colores" },
    { name: "Santiago", img: "/assets/images/santiago.png", desc: "Ciudad vibrante" }
  ];

  return (
    <section id="guía-de-chile" className="py-24 bg-brand-navyLight border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-4xl font-bold text-white mb-4">Descubre Chile</h2>
          <p className="text-brand-textSec text-lg">Estudiar en Santiago te permite explorar uno de los países más diversos del mundo. Desde el desierto de Atacama hasta los glaciares de la Patagonia.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {places.map((place, i) => (
            <div key={i} className="group relative aspect-[3/4] md:aspect-[4/5] rounded-[24px] overflow-hidden cursor-pointer">
              <img src={place.img} alt={place.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent opacity-90 transition-opacity group-hover:opacity-100"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full transform transition-transform duration-500 group-hover:-translate-y-2">
                <p className="text-brand-turquoise text-sm font-semibold uppercase tracking-wider mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">{place.desc}</p>
                <h3 className="font-display text-2xl font-bold text-white">{place.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 7. Process & CTA & Footer
export const FooterSection = () => {
  return (
    <div id="reserva">
      <section className="py-24 bg-brand-navy">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl font-bold text-white mb-16">Reserva tu residencia en 4 pasos</h2>
          
          <div className="flex flex-col md:flex-row justify-between relative">
            {/* Desktop connecting line */}
            <div className="hidden md:block absolute top-10 left-10 right-10 h-0.5 bg-brand-border z-0"></div>
            
            {[
              { icon: "🔍", title: "Explora", desc: "Elige tu barrio ideal." },
              { icon: "📅", title: "Disponibilidad", desc: "Verifica las fechas." },
              { icon: "💻", title: "Reserva online", desc: "Asegura de forma segura." },
              { icon: "🛬", title: "Llega listo", desc: "Aterriza 100% garantizado." }
            ].map((step, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center mb-10 md:mb-0 w-full md:w-1/4 px-4">
                <div className="w-20 h-20 rounded-full bg-brand-navyLight border border-brand-turquoise/30 flex items-center justify-center text-3xl mb-6 shadow-glow transition-transform hover:-translate-y-2 cursor-default">
                  {step.icon}
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-brand-textSec text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pre-Footer CTA */}
      <section className="relative py-32 bg-brand-navy overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/images/atacama.png')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/70 to-transparent"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="bg-brand-navy/60 backdrop-blur-xl p-12 rounded-[2rem] border border-white/10 shadow-img">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">¿Listo para vivir tu intercambio en Santiago?</h2>
            <p className="text-xl text-white/80 mb-10">Comienza tu experiencia internacional. Reserva online en minutos.</p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-brand-turquoise hover:bg-[#128a9e] text-white font-medium py-4 px-10 rounded-full transition-all text-lg shadow-[0_4px_20px_0_rgba(22,167,200,0.5)]">
                Reservar habitación
              </button>
              <button className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20b858] text-white font-medium py-4 px-10 rounded-full transition-all text-lg">
                <span>💬</span> Hablar por WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-brand-navy border-t border-brand-border py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-8">
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded bg-brand-turquoise flex items-center justify-center text-xs text-white font-bold">S</div>
              <span className="font-display font-semibold text-white">Santiago Exchange</span>
            </div>
            <p className="text-brand-textSec text-sm">Residencias premium para estudiantes internacionales en el corazón de Chile.</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-brand-border flex flex-col md:flex-row justify-between items-center text-xs text-brand-textSec">
          <p>© 2026 Santiago Exchange. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};
