"use client";

export default function Services() {
  return (
    <section id="services" className="py-28 bg-[#0a0a0a] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-12">
          Nuestros <span className="text-teal-400">Servicios</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition">
            <h3 className="text-lg font-bold mb-3 text-teal-400">
              Desarrollo Web Profesional
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Sitios modernos, rápidos y optimizados para convertir visitas en clientes desde cualquier dispositivo.
            </p>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition">
            <h3 className="text-lg font-bold mb-3 text-teal-400">
              Tiendas Online
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              E-commerce con pagos integrados, carrito de compras y panel de administración completo.
            </p>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition">
            <h3 className="text-lg font-bold mb-3 text-teal-400">
              Diseño UX / UI
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Interfaces limpias, intuitivas y pensadas para mejorar la experiencia del usuario.
            </p>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition">
            <h3 className="text-lg font-bold mb-3 text-teal-400">
              Posicionamiento SEO
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Optimización técnica y de contenido para mejorar tu visibilidad en Google.
            </p>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition">
            <h3 className="text-lg font-bold mb-3 text-teal-400">
              Soporte & Mantenimiento
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Actualizaciones, seguridad, respaldo y soporte técnico permanente.
            </p>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition">
            <h3 className="text-lg font-bold mb-3 text-teal-400">
              Desarrollo a Medida
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Plataformas, sistemas internos y soluciones digitales personalizadas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

