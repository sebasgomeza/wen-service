export default function Services() {
  return (
    <section id="services" className="w-full py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Nuestros <span className="text-teal-400">Servicios</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Servicio 1 */}
          <div className="border border-neutral-800 rounded-2xl p-6 hover:border-teal-400 transition">
            <h3 className="text-xl font-bold mb-3">Desarrollo Web</h3>
            <ul className="space-y-2 text-neutral-300">
              <li>• Webs corporativas</li>
              <li>• Landing pages</li>
              <li>• Portafolios</li>
              <li>• Ecommerce</li>
              <li>• Blogs</li>
            </ul>
          </div>

          {/* Servicio 2 */}
          <div className="border border-neutral-800 rounded-2xl p-6 hover:border-teal-400 transition">
            <h3 className="text-xl font-bold mb-3">Diseño Profesional</h3>
            <ul className="space-y-2 text-neutral-300">
              <li>• Diseño moderno</li>
              <li>• Responsive</li>
              <li>• Rediseño web</li>
              <li>• Optimización UX/UI</li>
              <li>• Branding visual</li>
            </ul>
          </div>

          {/* Servicio 3 */}
          <div className="border border-neutral-800 rounded-2xl p-6 hover:border-teal-400 transition">
            <h3 className="text-xl font-bold mb-3">Tiendas Online</h3>
            <ul className="space-y-2 text-neutral-300">
              <li>• Webpay / MercadoPago</li>
              <li>• Catálogo productos</li>
              <li>• Carrito compras</li>
              <li>• Panel administrador</li>
            </ul>
          </div>

          {/* Servicio 4 */}
          <div className="border border-neutral-800 rounded-2xl p-6 hover:border-teal-400 transition">
            <h3 className="text-xl font-bold mb-3">Mantenimiento Web</h3>
            <ul className="space-y-2 text-neutral-300">
              <li>• Actualizaciones</li>
              <li>• Seguridad</li>
              <li>• Respaldo</li>
              <li>• Soporte técnico</li>
              <li>• Optimización velocidad</li>
            </ul>
          </div>

          {/* Servicio 5 */}
          <div className="border border-neutral-800 rounded-2xl p-6 hover:border-teal-400 transition">
            <h3 className="text-xl font-bold mb-3">Optimización SEO</h3>
            <ul className="space-y-2 text-neutral-300">
              <li>• Posicionamiento Google</li>
              <li>• Textos optimizados</li>
              <li>• Indexación</li>
              <li>• Velocidad web</li>
            </ul>
          </div>

          {/* Servicio 6 */}
          <div className="border border-neutral-800 rounded-2xl p-6 hover:border-teal-400 transition">
            <h3 className="text-xl font-bold mb-3">Marketing Digital</h3>
            <ul className="space-y-2 text-neutral-300">
              <li>• Redes sociales</li>
              <li>• Pixel Meta</li>
              <li>• Google Analytics</li>
              <li>• Embudos de venta</li>
              <li>• Email marketing</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
