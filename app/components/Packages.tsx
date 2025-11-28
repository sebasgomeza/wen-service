"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Packages() {
  const packages = [
    {
      name: "Básico",
      price: "$79.990",
      desc: "Ideal para emprendedores que recién comienzan",
      features: [
        "Landing Page",
        "Diseño Responsive",
        "Formulario de contacto",
        "Optimización básica SEO",
      ],
      route: "/paquetes/basico",
    },
    {
      name: "Profesional",
      price: "$149.990",
      desc: "La mejor opción para negocios en crecimiento",
      features: [
        "Web Corporativa",
        "Hasta 5 secciones",
        "SEO avanzado",
        "Velocidad optimizada",
        "Integración WhatsApp",
      ],
      highlight: true,
      route: "/paquetes/pro",
    },
    {
      name: "Premium",
      price: "$249.990",
      desc: "Solución completa para vender online",
      features: [
        "Tienda Online",
        "Pagos integrados",
        "Panel administrador",
        "Correos automáticos",
        "Soporte 30 días",
      ],
      route: "/paquetes/premium",
    },
  ];

  return (
    <section id="packages" className="py-28 bg-gradient-to-b from-black to-neutral-900">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-6"
        >
          Planes y <span className="text-teal-400">Precios</span>
        </motion.h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-16">
          Elige el plan ideal para tu negocio. Todos nuestros planes están optimizados para vender.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-stretch">

          {packages.map((pkg, i) => (
            <motion.div
  key={i}
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: i * 0.2 }}
  whileHover={{ y: -6 }}
  className={`relative rounded-2xl border p-10 transition flex flex-col justify-between
 ${
    pkg.highlight
      ? "bg-gradient-to-b from-teal-500 to-teal-600 text-black border-teal-400 shadow-2xl scale-105"
      : "bg-neutral-900 border-gray-800 text-white shadow-xl"
  }`}
>

              {/* Badge destacado */}
              {pkg.highlight && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-4 py-1 rounded-full">
                  Más vendido
                </span>
              )}

              {pkg.highlight && (
  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-teal-400 text-xs font-bold px-4 py-1 rounded-full border border-teal-400">
    MÁS VENDIDO
  </span>
)}

<h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>

<p className="text-3xl md:text-4xl font-extrabold mb-1">
  {pkg.price}
</p>

<p
  className={`mb-6 text-sm ${
    pkg.highlight ? "text-black/80" : "text-gray-400"
  }`}
>
  Pago único • Sin mensualidades
</p>

<ul className="space-y-3 mb-6">
  {pkg.features.map((feature, index) => (
    <li key={index} className="flex items-start gap-3 text-gray-700">
      <span className="text-teal-500 text-lg mt-0.5">✔</span>
      <span>{feature}</span>
    </li>
  ))}
</ul>



              <Link href={pkg.route}>
  <button
    className={`w-full py-4 rounded-xl font-bold text-sm tracking-wide transition-all duration-300 ${
      pkg.highlight
        ? "bg-black text-white hover:bg-neutral-800 shadow-xl"
        : "bg-teal-500 text-black hover:bg-teal-400 shadow"
    }`}
  >
    Elegir Plan
  </button>
</Link>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

