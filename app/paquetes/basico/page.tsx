import Link from "next/link";

export default function BasicoPage() {
  return (
    <section className="min-h-screen bg-[#050505] text-white flex items-center justify-center px-6">
      <div className="max-w-xl w-full bg-white/5 border border-white/10 rounded-2xl p-10 space-y-6 text-center">

        <h1 className="text-4xl font-bold text-cyan-400">
          Plan Básico
        </h1>

        <p className="text-gray-300">
          Ideal para emprendedores que quieren presencia profesional en internet.
        </p>

        <ul className="text-left text-gray-200 space-y-2">
          <li>✅ 1 Landing Page</li>
          <li>✅ Diseño Responsive</li>
          <li>✅ Formulario de contacto</li>
          <li>✅ Optimización SEO básica</li>
        </ul>

        <p className="text-3xl font-extrabold">$79.990</p>

        <div className="flex flex-col gap-4">
          <a
            href="https://wa.me/56900000000"
            target="_blank"
            className="bg-green-500 text-black font-bold py-3 rounded-xl hover:bg-green-400 transition"
          >
            Solicitar por WhatsApp
          </a>

          <button className="bg-cyan-400 text-black font-bold py-3 rounded-xl hover:bg-cyan-300 transition">
            Pagar ahora
          </button>

          <Link href="/" className="text-sm text-gray-400 hover:text-white">
            Volver al inicio
          </Link>
        </div>
      </div>
    </section>
  );
}
