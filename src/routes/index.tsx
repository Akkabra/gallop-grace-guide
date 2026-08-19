import { createFileRoute } from "@tanstack/react-router";
import heroImage from "@/assets/hero-equestrian.jpg";
import domaClasicaImage from "@/assets/doma-clasica.jpg";
import saltoObstaculosImage from "@/assets/salto-obstaculos.jpg";
import ponyClubImage from "@/assets/pony-club.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Equestria Legacy | Escuela de Equitación de Excelencia" },
      {
        name: "description",
        content:
          "Descubra la armonía entre jinete y caballo en Equestria Legacy. Clases de doma clásica, salto de obstáculos y pony club en Sevilla desde 1924.",
      },
      { property: "og:title", content: "Equestria Legacy | Escuela de Equitación de Excelencia" },
      {
        property: "og:description",
        content:
          "Tradición y excelencia deportiva en la formación ecuestre. Doma clásica, salto y pony club para todas las edades.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-parchment font-sans text-forest">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-forest/5">
        <span className="font-serif text-2xl font-bold tracking-tight italic">Equestria Legacy</span>
        <div className="hidden md:flex gap-10 text-xs uppercase tracking-widest font-medium">
          <a href="#disciplinas" className="hover:text-gold transition-colors">
            Nuestra Herencia
          </a>
          <a href="#disciplinas" className="hover:text-gold transition-colors">
            Programas
          </a>
          <a href="#instalaciones" className="hover:text-gold transition-colors">
            Las Caballerizas
          </a>
          <a href="#contacto" className="hover:text-gold transition-colors">
            Contacto
          </a>
        </div>
        <button className="px-6 py-2 bg-forest text-parchment text-xs uppercase tracking-widest hover:bg-leather transition-colors">
          Reservar Clase
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative">
        <div className="grid lg:grid-cols-12 items-center">
          <div className="lg:col-span-5 px-8 py-20 lg:py-0 lg:pl-16 z-10">
            <span className="text-gold font-medium uppercase tracking-[0.2em] text-xs mb-4 block">
              Fundada en 1924
            </span>
            <h1 className="font-serif text-6xl lg:text-8xl leading-[0.9] mb-8">
              El arte de la <span className="italic">conexión</span> noble.
            </h1>
            <p className="text-lg leading-relaxed text-forest/70 mb-10 max-w-md">
              Descubra la armonía entre jinete y caballo en un entorno donde la tradición se encuentra con la excelencia deportiva.
            </p>
            <div className="flex gap-6 items-center">
              <a
                href="#disciplinas"
                className="px-8 py-4 bg-leather text-white text-sm uppercase tracking-widest hover:brightness-110 transition-all"
              >
                Ver Programas
              </a>
              <a
                href="#historia"
                className="text-sm uppercase tracking-widest border-b border-forest pb-1 hover:text-gold hover:border-gold transition-all"
              >
                Nuestra Historia
              </a>
            </div>
          </div>
          <div className="lg:col-span-7 relative h-[500px] lg:h-[800px]">
            <img
              src={heroImage}
              alt="Jinete montando un caballo castaño en un campo brumoso al amanecer"
              width={1200}
              height={1600}
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Featured Experience */}
      <section id="disciplinas" className="py-24 px-8 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl mb-4 italic">Disciplinas y Maestría</h2>
          <div className="w-24 h-px bg-gold mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="group">
            <div className="aspect-[3/4] bg-stone-100 mb-6 overflow-hidden">
              <img
                src={domaClasicaImage}
                alt="Detalle de silla de cuero y botas de equitación"
                width={800}
                height={1000}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <h3 className="font-serif text-2xl mb-3 italic">Doma Clásica</h3>
            <p className="text-forest/60 leading-relaxed mb-4">
              Perfección en el movimiento y elegancia técnica para jinetes de todos los niveles.
            </p>
            <span className="text-xs uppercase tracking-widest font-semibold text-leather group-hover:translate-x-2 transition-transform inline-block cursor-pointer">
              Explorar &rarr;
            </span>
          </div>

          <div className="group">
            <div className="aspect-[3/4] bg-stone-100 mb-6 overflow-hidden">
              <img
                src={saltoObstaculosImage}
                alt="Caballo saltando una valla de madera en una pista profesional"
                width={800}
                height={1000}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <h3 className="font-serif text-2xl mb-3 italic">Salto de Obstáculos</h3>
            <p className="text-forest/60 leading-relaxed mb-4">
              Adrenalina y precisión en nuestras pistas de entrenamiento de nivel competitivo.
            </p>
            <span className="text-xs uppercase tracking-widest font-semibold text-leather group-hover:translate-x-2 transition-transform inline-block cursor-pointer">
              Explorar &rarr;
            </span>
          </div>

          <div className="group">
            <div className="aspect-[3/4] bg-stone-100 mb-6 overflow-hidden">
              <img
                src={ponyClubImage}
                alt="Niña sonriente montando un poni blanco"
                width={800}
                height={1000}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <h3 className="font-serif text-2xl mb-3 italic">Pony Club</h3>
            <p className="text-forest/60 leading-relaxed mb-4">
              Iniciación para los más jóvenes en un entorno seguro, familiar y lleno de valores.
            </p>
            <span className="text-xs uppercase tracking-widest font-semibold text-leather group-hover:translate-x-2 transition-transform inline-block cursor-pointer">
              Explorar &rarr;
            </span>
          </div>
        </div>
      </section>

      {/* Quote/Atmosphere Section */}
      <section id="historia" className="bg-forest text-parchment py-32 overflow-hidden">
        <div className="px-8 max-w-5xl mx-auto text-center">
          <span className="text-gold/60 text-5xl font-serif mb-8 block font-light text-center">&ldquo;</span>
          <p className="font-serif text-3xl md:text-5xl leading-tight mb-12 italic">
            Un caballo no es un animal, es el espejo de tu alma, un compañero silencioso que te enseña la verdadera libertad.
          </p>
          <p className="uppercase tracking-[0.3em] text-xs text-gold font-medium">
            Javier de Mendoza &mdash; Director de Equitación
          </p>
        </div>
      </section>

      {/* Contact Footer */}
      <footer id="contacto" className="py-20 px-8 border-t border-forest/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="max-w-xs">
            <span className="font-serif text-2xl font-bold tracking-tight italic block mb-6">Equestria Legacy</span>
            <p className="text-sm text-forest/60 leading-relaxed">
              Carretera del Valle, km 12.5
              <br />
              Sevilla, España
              <br />
              info@equestrialegacy.es
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-xs uppercase tracking-widest font-bold mb-2">Síguenos</h4>
            <a href="#" className="text-sm hover:text-gold transition-colors">
              Instagram
            </a>
            <a href="#" className="text-sm hover:text-gold transition-colors">
              YouTube
            </a>
          </div>
          <div className="bg-white p-8 border border-forest/5 shadow-sm max-w-sm">
            <h4 className="font-serif text-xl mb-4">Boletín de la Academia</h4>
            <p className="text-sm text-forest/60 mb-6">Reciba noticias sobre próximos eventos y clínicas especiales.</p>
            <div className="flex border-b border-forest/20 pb-2">
              <input
                type="email"
                placeholder="Su correo electrónico"
                className="bg-transparent text-sm w-full outline-none py-1 text-foreground"
              />
              <button className="text-xs uppercase font-bold text-leather hover:text-gold transition-colors">Unirse</button>
            </div>
          </div>
        </div>
        <div className="mt-20 pt-8 border-t border-forest/5 text-center">
          <p className="text-[10px] uppercase tracking-widest text-forest/40">
            &copy; 2024 Equestria Legacy. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
