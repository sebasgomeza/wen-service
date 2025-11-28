"use client";

export default function FAQ() {
  return (
    <section id="faq" className="py-28 bg-neutral-950 text-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold mb-6 text-center">
          Preguntas <span className="text-teal-400">Frecuentes</span>
        </h2>

        <p className="text-center text-gray-400 mb-16">
          Respondemos las dudas más comunes antes de comenzar tu proyecto.
        </p>

        <div className="space-y-6">
          {/* Pregunta 1 */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
            <h3 className="font-bold text-lg mb-2">
              ¿Cuánto demora en estar lista mi página web?
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Depende del tipo de proyecto, pero en promedio las páginas web
              están listas entre 7 y 15 días hábiles.
            </p>
          </div>

          {/* Pregunta 2 */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
            <h3 className="font-bold text-lg mb-2">
              ¿Qué necesito entregar para comenzar?
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Necesitamos tu logo, textos (o los redactamos por ti),
              referencias visuales y los datos de tu negocio.
            </p>
          </div>

          {/* Pregunta 3 */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
            <h3 className="font-bold text-lg mb-2">
              ¿Incluye dominio y hosting?
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              El hosting puede estar incluido según el plan. El dominio se
              contrata aparte a nombre del cliente.
            </p>
          </div>

          {/* Pregunta 4 */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
            <h3 className="font-bold text-lg mb-2">
              ¿Podré editar mi página después?
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Sí, en los planes administrables puedes modificar textos,
              imágenes y productos fácilmente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

