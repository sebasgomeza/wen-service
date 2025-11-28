"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Portfolio() {
  const projects = [
    {
      title: "Tienda Online de Tecnología",
      desc: "Ecommerce moderno con pagos integrados, carrito de compras y panel administrador.",
      image: "/proyecto1.jpg",
    },
    {
      title: "Landing Page Inmobiliaria",
      desc: "Página de ventas optimizada para convertir visitas en clientes potenciales.",
      image: "/proyecto2.jpg",
    },
    {
      title: "Web Corporativa Empresarial",
      desc: "Sitio institucional profesional para fortalecer la presencia digital.",
      image: "/proyecto3.jpg",
    },
    {
      title: "Sistema de Reservas",
      desc: "Aplicación web para agendamiento de horas y control de clientes.",
      image: "/proyecto4.jpg",
    },
    {
      title: "Portafolio Creativo",
      desc: "Portafolio moderno diseñado para destacar trabajos creativos.",
      image: "/proyecto5.jpg",
    },
    {
      title: "Tienda Online de Ropa",
      desc: "Ecommerce de moda con pagos en línea, catálogo dinámico y envíos.",
      image: "/proyecto6.jpg",
    },
  ];

  return (
    <section id="portfolio" className="py-28 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-4"
        >
          Nuestro <span className="text-cyan-400">Portafolio</span>
        </motion.h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Algunos de los proyectos que hemos desarrollado con calidad profesional.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ scale: 1.03 }}
              className="bg-neutral-900 rounded-2xl overflow-hidden shadow-xl border border-neutral-800 hover:border-cyan-400 transition-all duration-300 flex flex-col"
            >
              {/* Imagen */}
              <div className="relative w-full h-56">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Contenido */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-6">
                    {project.desc}
                  </p>
                </div>

                <a
                  href="#contact"
                  className="inline-block w-full text-center bg-cyan-400 text-black px-6 py-3 rounded-lg font-bold hover:bg-cyan-300 transition"
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
