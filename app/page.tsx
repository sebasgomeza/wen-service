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
  <a href="#services" className="hover:text-teal-300 transition">Servicios</a>
  <a href="#packages" className="hover:text-teal-300 transition">Paquetes</a>
  <a href="#portfolio" className="hover:text-teal-300 transition">Portafolio</a>
  <a href="#about" className="hover:text-teal-300 transition">Sobre Nosotros</a>
  <a href="#contact" className="hover:text-teal-300 transition">Contacto</a>
   {/* BOTÓN WHATSAPP HEADER */}
  <a
    href="https://wa.me/56950445052"
    target="_blank"
    className="ml-4 bg-green-500 hover:bg-green-400 text-black px-6 py-3 rounded-xl font-bold transition"
  >
    WhatsApp
  </a>

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
    Creamos sitios web que{" "}
    <span className="text-teal-400">
      transforman visitas en clientes
    </span>
  </h1>

  <p className="mt-6 text-gray-200 text-lg max-w-2xl mx-auto">
    Diseño profesional, tiendas online y posicionamiento en Google — entregamos
    soluciones listas para vender.
  </p>

  <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
    <a
      href="#packages"
      className="bg-teal-500 hover:bg-teal-400 text-black font-semibold px-8 py-3 rounded-lg transition"
    >
      Ver Planes
    </a>

    <a
      href="#contact"
      className="border border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-lg transition"
    >
      Cotizar mi web
    </a>
  </div>

  <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-gray-300">
    <div className="px-4 py-2 bg-neutral-800 rounded-lg">
       Entregas rápidas
    </div>
    <div className="px-4 py-2 bg-neutral-800 rounded-lg">
       Soporte y seguridad
    </div>
    <div className="px-4 py-2 bg-neutral-800 rounded-lg">
       Optimizado para vender
    </div>
  </div>
</div>


</motion.section>

          {/* Servicios */}
  <Services />
  <Packages />
  <Portfolio />
  <Contact />
  <Testimonials />
  <Clientes />
  <FAQ />
  




        
      </main>
      
      <section id="about" className="py-28 bg-white text-black">
  <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

    {/* COLUMNA TEXTO */}
    <div>
      <h2 className="text-4xl font-extrabold mb-6">
        Sobre <span className="text-teal-500">Nosotros</span>
      </h2>

      <p className="text-gray-600 mb-6 leading-relaxed">
        Somos una agencia digital especializada en el diseño y desarrollo de
        sitios web profesionales, tiendas online y soluciones digitales para
        empresas y emprendedores en Chile.
      </p>

      <p className="text-gray-500 mb-8 leading-relaxed">
        Nuestro enfoque está en la conversión, el diseño moderno, la velocidad
        de carga, el posicionamiento en Google y la experiencia del usuario.
        Creamos sitios pensados para vender.
      </p>

      <div className="flex gap-4">
        <a
          href="#contact"
          className="bg-teal-500 hover:bg-teal-400 text-black font-semibold px-6 py-3 rounded-lg transition"
        >
          Contáctanos
        </a>

        <a
          href="#portfolio"
          className="border border-black text-black hover:bg-black hover:text-white px-6 py-3 rounded-lg transition"
        >
          Ver trabajos
        </a>
      </div>
    </div>

    {/* COLUMNA TARJETAS */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

      <div className="bg-white border border-gray-200 shadow-lg rounded-2xl p-6">
        <h3 className="text-lg font-bold mb-2"> Experiencia</h3>
        <p className="text-sm text-gray-500">
          Años desarrollando proyectos digitales para distintos rubros.
        </p>
      </div>

      <div className="bg-white border border-gray-200 shadow-lg rounded-2xl p-6">
        <h3 className="text-lg font-bold mb-2"> Enfoque en ventas</h3>
        <p className="text-sm text-gray-500">
          Cada sitio está diseñado para convertir visitas en clientes.
        </p>
      </div>

      <div className="bg-white border border-gray-200 shadow-lg rounded-2xl p-6">
        <h3 className="text-lg font-bold mb-2"> 100% Responsive</h3>
        <p className="text-sm text-gray-500">
          Perfecto en celulares, tablets y computadores.
        </p>
      </div>

      <div className="bg-white border border-gray-200 shadow-lg rounded-2xl p-6">
        <h3 className="text-lg font-bold mb-2"> Seguridad</h3>
        <p className="text-sm text-gray-500">
          Protección, respaldo y soporte incluidos.
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
