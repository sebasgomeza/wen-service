export default function Testimonios() {
  return (
    <section className="py-20 bg-[#0f172a] text-white">
      <h2 className="text-4xl font-bold text-center mb-12">
        Lo que dicen nuestros clientes
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        <div className="bg-black p-6 rounded-2xl shadow-xl">
          <p>"Mi negocio creció gracias a su página web."</p>
          <span className="block mt-4 text-cyan-400 font-bold">Juan Pérez</span>
        </div>

        <div className="bg-black p-6 rounded-2xl shadow-xl">
          <p>"Excelente atención y resultados reales."</p>
          <span className="block mt-4 text-cyan-400 font-bold">María López</span>
        </div>

        <div className="bg-black p-6 rounded-2xl shadow-xl">
          <p>"Mi tienda online ahora vende todos los días."</p>
          <span className="block mt-4 text-cyan-400 font-bold">Carlos Soto</span>
        </div>
      </div>
    </section>
  )
}

