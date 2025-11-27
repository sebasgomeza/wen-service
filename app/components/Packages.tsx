"use client";

"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Packages() {
  const packages = [
    {
      name: "Básico",
      price: "$79.990",
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
    <section id="packages" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12"
        >
          Nuestros <span className="text-teal-400">Paquetes</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {packages.map((pkg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className={`rounded-xl border p-8 ${
                pkg.highlight
                  ? "bg-teal-500 text-black border-teal-400"
                  : "bg-neutral-900 border-gray-800 text-white"
              }`}
            >
              <h3 className="text-2xl font-bold mb-4">{pkg.name}</h3>
              <p className="text-3xl font-extrabold mb-6">{pkg.price}</p>

              <ul className="space-y-3 text-sm mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx}>✔ {feature}</li>
                ))}
              </ul>

              <Link href={pkg.route}>
                <button
                  className={`w-full py-3 rounded-lg font-bold transition ${
                    pkg.highlight
                      ? "bg-black text-white hover:bg-neutral-900"
                      : "bg-teal-500 text-black hover:bg-teal-400"
                  }`}
                >
                  Ver paquete
                </button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
