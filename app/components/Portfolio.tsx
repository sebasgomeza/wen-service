"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Portfolio() {
  const projects = [
    {
      title: "Tienda Online de Tecnología",
      desc: "Ecommerce con pagos integrados y panel administrador.",
      image: "/proyecto1.jpg",
    },
    {
      title: "Landing Page Inmobiliaria",
      desc: "Página de ventas optimizada para conversiones.",
      image: "/proyecto2.jpg",
    },
    {
      title: "Web Corporativa Empresa",
      desc: "Sitio profesional institucional.",
      image: "/proyecto3.jpg",
    },
    {
      title: "Sistema de Reservas",
      desc: "Aplicación web para gestión de reservas.",
      image: "/proyecto4.jpg",
    },
    {
      title: "Portafolio Creativo",
      desc: "Portafolio moderno para diseñador.",
      image: "/proyecto5.jpg",
    },
    {
      title: "Tienda de Ropa",
      desc: "Ecommerce de moda con carrito y pagos.",
      image: "/proyecto6.jpg",
    },
  ];

  return (
    <section id="portfolio" className="py-28 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-4"
        >
          Nuestro <span className="text-cyan-400">Portafolio</span>
        </motion.h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Algunos de los proyectos que hemos desarrollado para nuestros clientes.
        </p>

        {/* GRID ORDENADO */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ scale: 1.03 }}
              className="bg-neutral-900 rounded-xl shadow-lg flex flex-col overflow-hidden"
            >
              
              {/* Imagen */}
              <div className="relative w-full h-56 overflow-hidden">
  <Image
    src={project.image}
    alt={project.title}
    fill
    sizes="100%"
    className="object-cover"
  />
</div>


              {/* Texto y botón */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>

                <p className="text-gray-400 text-sm mb-4">
                  {project.desc}
                </p>

                {/* Botón pegado abajo */}
                <a
                  href="#contact"
                  className="mt-auto inline-block w-full text-center bg-teal-500 text-black px-5 py-2 rounded-lg font-bold hover:bg-teal-400 transition"
                >
                  Ver proyecto
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
