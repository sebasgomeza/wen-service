"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Carlos Méndez",
      role: "Dueño de Tienda Online",
      comment:
        "Excelente servicio, mi tienda quedó profesional y lista para vender. 100% recomendados.",
      image: "/cliente1.jpg",
    },
    {
      name: "María González",
      role: "Corredora de Propiedades",
      comment:
        "Muy rápidos y responsables. Ahora recibo clientes todos los días desde la web.",
      image: "/cliente2.jpg",
    },
    {
      name: "Javier Soto",
      role: "Emprendedor",
      comment:
        "Me explicaron todo paso a paso. La página quedó perfecta en celular y computador.",
      image: "/cliente3.jpg",
    },
  ];

  return (
    <section className="py-28 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4"
        >
          Opiniones de <span className="text-cyan-400">Nuestros Clientes</span>
        </motion.h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-16">
          Empresas y emprendedores que confiaron en WenService
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-neutral-900 border border-neutral-800 p-8 rounded-xl shadow-xl"
            >
              <div className="flex justify-center mb-4">
  <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-cyan-400">
    <Image
      src={item.image}
      alt={item.name}
      fill
      className="object-cover"
    />
  </div>
</div>


              <p className="text-gray-300 text-sm mb-4 italic">
                “{item.comment}”
              </p>

              <h4 className="font-bold">{item.name}</h4>
              <p className="text-cyan-400 text-sm">{item.role}</p>

              <div className="flex justify-center mt-3 text-yellow-400">
                ⭐⭐⭐⭐⭐
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

