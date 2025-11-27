export default function FAQ() {
  return (
    <section className="py-20 bg-black text-white">
      <h2 className="text-4xl font-bold text-center mb-12">
        Preguntas Frecuentes
      </h2>

      <div className="max-w-4xl mx-auto px-6 space-y-6">
        <div className="bg-[#0f172a] p-6 rounded-xl">
          <h3 className="font-bold text-lg">¿Cuánto demora una página web?</h3>
          <p className="text-gray-300">Entre 5 y 10 días hábiles.</p>
        </div>

        <div className="bg-[#0f172a] p-6 rounded-xl">
          <h3 className="font-bold text-lg">¿Incluye dominio y hosting?</h3>
          <p className="text-gray-300">Podemos asesorarte en todo el proceso.</p>
        </div>

        <div className="bg-[#0f172a] p-6 rounded-xl">
          <h3 className="font-bold text-lg">¿Se puede pagar en cuotas?</h3>
          <p className="text-gray-300">Sí, ofrecemos facilidades de pago.</p>
        </div>
      </div>
    </section>
  )
}
