export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

        {/* Texto izquierdo */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Solicita tu <span className="text-teal-400">Presupuesto</span>
          </h2>
          <p className="text-gray-400 mb-8">
            Cuéntanos sobre tu proyecto y te responderemos lo antes posible.
          </p>

          <ul className="space-y-4 text-gray-300">
            <li>✅ Respuesta rápida</li>
            <li>✅ Presupuesto sin compromiso</li>
            <li>✅ Atención personalizada</li>
            <li>✅ Soporte real</li>
          </ul>
        </div>

        {/* Formulario */}
        <form className="bg-[#0f0f0f] p-8 rounded-2xl shadow-xl space-y-6">
          <div>
            <label className="block mb-2 text-sm">Nombre</label>
            <input
              type="text"
              placeholder="Tu nombre"
              className="w-full p-3 rounded bg-black text-white border border-gray-800 focus:border-teal-500 outline-none"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm">Correo</label>
            <input
              type="email"
              placeholder="tucorreo@email.com"
              className="w-full p-3 rounded bg-black text-white border border-gray-800 focus:border-teal-500 outline-none"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm">Mensaje</label>
            <textarea
              rows={4}
              placeholder="Cuéntanos tu idea..."
              className="w-full p-3 rounded bg-black text-white border border-gray-800 focus:border-teal-500 outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-teal-500 hover:bg-teal-400 text-black font-bold py-3 rounded-lg transition"
          >
            Enviar Mensaje
          </button>
        </form>
      </div>
    </section>
  );
}
