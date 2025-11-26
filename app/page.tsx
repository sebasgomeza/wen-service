import Image from "next/image";
import Link from "next/link";
import Services from "./components/Services";
import Packages from "./components/Packages";
import Portfolio from "./components/Portfolio";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-gray-100 antialiased">
      {/* Header */}
      <header className="fixed w-full z-30 bg-black/40 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-4">
              <Link href="/" className="h-12 w-12 relative block cursor-pointer">
  <Image
    src="/wen-service.jpeg"
    alt="Wen Service"
    fill
    style={{ objectFit: "contain" }}
  />
</Link>
            </div>

            <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
              <a href="#services" className="hover:text-teal-300">Servicios</a>
              <a href="#packages" className="hover:text-teal-300">Paquetes</a>
              <a href="#portfolio" className="hover:text-teal-300">Portafolio</a>
              <a href="#about" className="hover:text-teal-300">Sobre Nosotros</a>
              <a href="#contact" className="hover:text-teal-300">Contacto</a>
              <a href="#contact" className="ml-4 inline-block bg-teal-500 hover:bg-teal-400 text-black font-semibold px-4 py-2 rounded">
                Solicitar presupuesto
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main className="pt-28">
        {/* Hero */}
        <section className="max-w-6xl mx-auto px-6 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight text-white">
              Construimos sitios web que{" "}
              <span className="text-teal-400">venden</span> y funcionan.
            </h1>
            <p className="mt-6 text-gray-300 max-w-xl">
              Diseñamos páginas profesionales, tiendas online y soluciones a
              medida para que tu negocio crezca en internet.
            </p>

            <div className="mt-8 flex gap-4">
              <a href="#contact" className="inline-block bg-teal-500 hover:bg-teal-400 text-black font-semibold px-5 py-3 rounded shadow">
                Solicitar presupuesto
              </a>
              <a href="#packages" className="inline-block border border-gray-700 px-5 py-3 rounded text-gray-200 hover:text-white">
                Ver paquetes
              </a>
            </div>
          </div>

          <div className="mx-auto w-full max-w-lg">
            <div className="rounded-2xl p-6 bg-gradient-to-br from-black/60 to-black/30 border border-gray-800">
              <Image
                src="/wen-service.jpeg"
                alt="Wen Service logo"
                width={900}
                height={600}
              />
            </div>
          </div>
        </section>
          {/* Servicios */}
  <Services />
  <Packages />
  <Portfolio />


        
      </main>
      <section id="about" className="max-w-6xl mx-auto px-6 lg:px-8 py-28">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

    {/* Texto */}
    <div>
      <h2 className="text-4xl font-extrabold mb-6">
        Sobre <span className="text-teal-400">Nosotros</span>
      </h2>

      <p className="text-gray-300 mb-6 leading-relaxed">
        Somos un equipo especializado en el desarrollo de soluciones digitales
        modernas. Creamos sitios web rápidos, optimizados y orientados a ventas
        para emprendedores, empresas y marcas personales.
      </p>

      <p className="text-gray-400 mb-8 leading-relaxed">
        Nuestro enfoque está en el diseño profesional, la experiencia de usuario,
        el posicionamiento en Google y la conversión de visitas en clientes reales.
      </p>

      <a
        href="#contact"
        className="inline-block bg-teal-500 hover:bg-teal-400 text-black font-semibold px-6 py-3 rounded-lg transition"
      >
        Contáctanos
      </a>
    </div>

    {/* Tarjetas de valores */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

      <div className="border border-neutral-800 rounded-xl p-6 hover:border-teal-400 transition">
        <h3 className="text-lg font-bold mb-2">🚀 Experiencia</h3>
        <p className="text-sm text-gray-400">
          Trabajamos con las mejores tecnologías del mercado.
        </p>
      </div>

      <div className="border border-neutral-800 rounded-xl p-6 hover:border-teal-400 transition">
        <h3 className="text-lg font-bold mb-2">🎯 Resultados</h3>
        <p className="text-sm text-gray-400">
          Nuestros sitios están pensados para convertir.
        </p>
      </div>

      <div className="border border-neutral-800 rounded-xl p-6 hover:border-teal-400 transition">
        <h3 className="text-lg font-bold mb-2">📱 Diseño Responsive</h3>
        <p className="text-sm text-gray-400">
          Perfecto en celular, tablet y computador.
        </p>
      </div>

      <div className="border border-neutral-800 rounded-xl p-6 hover:border-teal-400 transition">
        <h3 className="text-lg font-bold mb-2">🔒 Seguridad</h3>
        <p className="text-sm text-gray-400">
          Protección, respaldo y optimización incluidos.
        </p>
      </div>

    </div>

  </div>
</section>
{/* Contacto */}
<section
  id="contact"
  className="max-w-6xl mx-auto px-6 lg:px-8 py-28"
>
  <h2 className="text-4xl font-extrabold mb-6 text-center">
    Contácta<span className="text-teal-400">nos</span>
  </h2>

  <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">
    ¿Tienes un proyecto en mente? Escríbenos y te respondemos lo antes posible.
  </p>

  <div className="grid md:grid-cols-2 gap-12">
    {/* Info */}
    <div className="space-y-6">
      <div>
        <p className="font-semibold">📧 Email</p>
        <p className="text-gray-400">hola@wenservice.cl</p>
      </div>

      <div>
        <p className="font-semibold">📞 Teléfono</p>
        <p className="text-gray-400">+56 9 0000 0000</p>
      </div>

      <div>
        <p className="font-semibold">📍 Ubicación</p>
        <p className="text-gray-400">Chile</p>
      </div>
    </div>

    {/* Formulario */}
    <form className="space-y-4">
      <input
        type="text"
        placeholder="Nombre"
        className="w-full p-3 rounded bg-neutral-900 border border-neutral-800"
      />
      <input
        type="email"
        placeholder="Correo"
        className="w-full p-3 rounded bg-neutral-900 border border-neutral-800"
      />
      <textarea
        placeholder="Mensaje"
        rows={4}
        className="w-full p-3 rounded bg-neutral-900 border border-neutral-800"
      />
      <button
        type="submit"
        className="bg-teal-500 hover:bg-teal-400 text-black font-semibold px-6 py-3 rounded"
      >
        Enviar mensaje
      </button>
    </form>
  </div>
</section>


    </div>
  );
}
