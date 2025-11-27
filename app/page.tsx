"use client";

import Image from "next/image";
import Link from "next/link";
import Services from "./components/Services";
import Packages from "./components/Packages";
import Portfolio from "./components/Portfolio";
import Contact from "./components/contact";
import { motion } from "framer-motion";
import Testimonials from "./components/Testimonials";
import Clientes from "./components/clientes"
import FAQ from "./components/FAQ"


export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-neutral-900 to-black text-gray-100 antialiased">

      {/* Header */}
      <header className="fixed w-full z-30 bg-black/40 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-2 lg:px-4">

          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-4">
              <a href="/" className="text-xl font-bold tracking-wide ml-0">

  WenSer<span className="text-cyan-400">vice</span>
</a>

            </div>

            <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
              <a href="#services" className="hover:text-teal-300">Servicios</a>
              <a href="#packages" className="hover:text-teal-300">Paquetes</a>
              <a href="#portfolio" className="hover:text-teal-300">Portafolio</a>
              <a href="#about" className="hover:text-teal-300">Sobre Nosotros</a>
              <a href="#contact" className="hover:text-teal-300">Contacto</a>
              <a href="#contact" className="bg-cyan-400 text-black px-8 py-4 rounded-xl font-bold">
  Solicitar Presupuesto
</a>
<a
  href="https://wa.me/56950445052"
  target="_blank"
  className="bg-green-500 text-black px-8 py-4 rounded-xl font-bold"
>
  Contratar
</a>
<Link
  href="/proyectos"
  className="mt-4 inline-block w-full text-center bg-teal-500 text-black px-5 py-2 rounded-lg font-bold hover:bg-teal-400 transition"
>
  Ver proyecto
</Link>




            </nav>
          </div>
        </div>
      </header>

      <main className="pt-28">
        {/* HERO NUEVO GRANDE */}
<motion.section
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden"
>


  {/* Imagen de fondo */}
  <Image
    src="/hero.jpg"
    alt="Agencia desarrollo web"
    fill
    priority
    className="object-cover brightness-50"
  />

  {/* Contenido encima */}
  <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
    <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
      Creamos sitios web que <span className="text-teal-400">venden</span>
    </h1>

    <p className="mt-6 text-gray-200 text-lg max-w-2xl mx-auto">
      Diseño profesional, tiendas online, posicionamiento en Google y soluciones digitales completas para tu negocio.
    </p>

    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
      <a
        href="#contact"
        className="bg-teal-500 hover:bg-teal-400 text-black font-semibold px-8 py-3 rounded-lg transition"
      >
        Solicitar Presupuesto
      </a>

      <a
        href="#portfolio"
        className="border border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-lg transition"
      >
        Ver Portafolio
      </a>
    </div>
  </div>

</motion.section>


        {/* Hero */}
        <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">

  {/* Fondo con degradado */}
  <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-900 to-teal-950" />

  {/* Contenido */}
  <div className="relative z-10 text-center max-w-4xl px-6">
    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
  Impulsa tu negocio con una <br />
  <span className="text-cyan-400">Página Web Profesional</span> 
  <br /> que realmente vende
</h1>


    <p className="text-lg md:text-2xl text-gray-300 mb-8 max-w-3xl">
Creamos páginas web modernas, rápidas y optimizadas para que consigas más clientes,
vendas más y hagas crecer tu negocio en internet sin depender de terceros.
</p>


    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
      <a
        href="#contact"
        className="bg-teal-500 hover:bg-teal-400 text-black font-semibold px-8 py-3 rounded-lg transition"
      >
        Solicitar Presupuesto
      </a>

      <a
        href="#services"
        className="border border-white px-8 py-3 rounded-lg hover:bg-white hover:text-black transition"
      >
        Ver Servicios
      </a>
    </div>
  </div>
</section>

          {/* Servicios */}
  <Services />
  <Packages />
  <Portfolio />
  <Contact />
  <Testimonials />
  <Clientes />
  <FAQ />



        
      </main>
      <section id="about" className="max-w-6xl mx-auto px-6 lg:px-8 py-28">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

    {/* Texto */}
    <div>
      <h2 className="text-4xl font-extrabold mb-6">
        Sobre <span className="text-teal-400">Nosotros</span>
      </h2>

      <p className="text-gray-300 mb-6 leading-relaxed">
        Somos un equipo especializado en el desarrollo de soluciones digitales
        modernas. Creamos sitios web rápidos, optimizados y orientados a ventas
        para emprendedores, empresas y marcas personales.
      </p>

      <p className="text-gray-400 mb-8 leading-relaxed">
        Nuestro enfoque está en el diseño profesional, la experiencia de usuario,
        el posicionamiento en Google y la conversión de visitas en clientes reales.
      </p>

      <a
        href="#contact"
        className="inline-block bg-teal-500 hover:bg-teal-400 text-black font-semibold px-6 py-3 rounded-lg transition"
      >
        Contáctanos
      </a>
    </div>

    {/* Tarjetas de valores */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

      <div className="bg-[#0f172a] border border-gray-800 shadow-xl hover:shadow-2xl transition rounded-2xl p-6"
>
        <h3 className="text-lg font-bold mb-2">🚀 Experiencia</h3>
        <p className="text-sm text-gray-400">
          Trabajamos con las mejores tecnologías del mercado.
        </p>
      </div>

      <div className="bg-[#0f172a] border border-gray-800 shadow-xl hover:shadow-2xl transition rounded-2xl p-6"
>
        <h3 className="text-lg font-bold mb-2">🎯 Resultados</h3>
        <p className="text-sm text-gray-400">
          Nuestros sitios están pensados para convertir.
        </p>
      </div>

      <div className="bg-[#0f172a] border border-gray-800 shadow-xl hover:shadow-2xl transition rounded-2xl p-6"
>
        <h3 className="text-lg font-bold mb-2">📱 Diseño Responsive</h3>
        <p className="text-sm text-gray-400">
          Perfecto en celular, tablet y computador.
        </p>
      </div>

      <div className="bg-[#0f172a] border border-gray-800 shadow-xl hover:shadow-2xl transition rounded-2xl p-6"
>
        <h3 className="text-lg font-bold mb-2">🔒 Seguridad</h3>
        <p className="text-sm text-gray-400">
          Protección, respaldo y optimización incluidos.
        </p>
      </div>

    </div>

  </div>
</section>
{/* Contacto */}
<section
  id="contact"
  className="max-w-6xl mx-auto px-6 lg:px-8 py-28"
>
  <h2 className="text-4xl font-extrabold mb-6 text-center">
    Contácta<span className="text-teal-400">nos</span>
  </h2>

  <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">
    ¿Tienes un proyecto en mente? Escríbenos y te respondemos lo antes posible.
  </p>

  <div className="grid md:grid-cols-2 gap-12">
    {/* Info */}
    <div className="space-y-6">
      <div>
        <p className="font-semibold">📧 Email</p>
        <p className="text-gray-400">wenservice@cl.services.com</p>
      </div>

      <div>
        <p className="font-semibold">📞 Teléfono</p>
        <p className="text-gray-400">+56 9 50445052</p>
      </div>

      <div>
        <p className="font-semibold">📍 Ubicación</p>
        <p className="text-gray-400">Chile, region metropolitana</p>
      </div>
    </div>

    {/* Formulario */}
    <form className="space-y-4">
      <input
        type="text"
        placeholder="Nombre"
        className="w-full p-3 rounded bg-neutral-900 border border-neutral-800"
      />
      <input
        type="email"
        placeholder="Correo"
        className="w-full p-3 rounded bg-neutral-900 border border-neutral-800"
      />
      <textarea
        placeholder="Mensaje"
        rows={4}
        className="w-full p-3 rounded bg-neutral-900 border border-neutral-800"
      />
      <button
        type="submit"
        className="bg-teal-500 hover:bg-teal-400 text-black font-semibold px-6 py-3 rounded"
      >
        Enviar mensaje
      </button>
    </form>
  </div>
</section>


    </div>
  );
}
