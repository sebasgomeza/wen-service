export default function Packages() {
  return (
    <section id="packages" className="w-full py-24 bg-[#050505] text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Nuestros <span className="text-teal-400">Paquetes</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Paquete Básico */}
          <div className="border border-neutral-800 rounded-2xl p-8 hover:border-teal-400 transition">
            <h3 className="text-2xl font-bold mb-4">Básico</h3>
            <ul className="space-y-2 text-neutral-300">
              <li>✅ Landing Page</li>
              <li>✅ Diseño responsive</li>
              <li>✅ Botón WhatsApp</li>
              <li>✅ Dominio gratis 1 año*</li>
              <li>✅ Hosting básico</li>
            </ul>
            <p className="mt-6 text-xl font-bold text-teal-400">$99.990 CLP</p>
          </div>

          {/* Paquete Profesional */}
          <div className="border border-teal-400 rounded-2xl p-8 hover:scale-105 transition">
            <h3 className="text-2xl font-bold mb-4">Profesional</h3>
            <ul className="space-y-2 text-neutral-300">
              <li>✅ Web corporativa</li>
              <li>✅ Hasta 5 secciones</li>
              <li>✅ SEO básico</li>
              <li>✅ WhatsApp + Formulario</li>
              <li>✅ Dominio + Hosting</li>
            </ul>
            <p className="mt-6 text-xl font-bold text-teal-400">$189.990 CLP</p>
          </div>

          {/* Paquete Ecommerce */}
          <div className="border border-neutral-800 rounded-2xl p-8 hover:border-teal-400 transition">
            <h3 className="text-2xl font-bold mb-4">Ecommerce</h3>
            <ul className="space-y-2 text-neutral-300">
              <li>✅ Tienda online</li>
              <li>✅ Carrito de compras</li>
              <li>✅ Webpay / MercadoPago</li>
              <li>✅ Catálogo productos</li>
              <li>✅ Panel administrador</li>
            </ul>
            <p className="mt-6 text-xl font-bold text-teal-400">$349.990 CLP</p>
          </div>

        </div>
      </div>
    </section>
  );
}
