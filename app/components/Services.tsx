"use client";

export default function Services() {
  return (
    <section id="services" className="py-28 bg-gray-100 text-black">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-12">
          Nuestros <span className="text-teal-500">Servicios</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-3">Páginas Web Profesionales</h3>
            <p>
              Creamos sitios modernos, rápidos y adaptados a celulares para
              empresas, negocios y profesionales.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-3">Tiendas Online</h3>
            <p>
              Vende por internet con carrito de compras, pagos online y panel
              de administración.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-3">Diseño UX/UI</h3>
            <p>
              Interfaces atractivas, claras y enfocadas en convertir visitas
              en clientes.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-3">Posicionamiento SEO</h3>
            <p>
              Optimización para aparecer en Google y atraer más personas a tu
              negocio.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-3">Mantenimiento Web</h3>
            <p>
              Nos encargamos de actualizaciones, seguridad y soporte técnico.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-3">Desarrollo a Medida</h3>
            <p>
              Creamos sistemas web personalizados para empresas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

