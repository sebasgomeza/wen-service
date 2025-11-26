import Image from "next/image";

export default function Portfolio() {
  return (
    <section id="portfolio" className="w-full py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Nuestro <span className="text-teal-400">Portafolio</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Proyecto 1 */}
          <div className="border border-neutral-800 rounded-2xl overflow-hidden hover:border-teal-400 transition h-full flex flex-col">
            <Image
              src="/proyecto1.jpg"
              alt="Proyecto 1"
              width={500}
              height={300}
              className="object-cover h-[220px] w-full"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-2">Web Corporativa</h3>
              <p className="text-neutral-400 text-sm">
                Página profesional para empresa de servicios.
              </p>
              <div className="flex-grow"></div>
            </div> 
          </div>

          {/* Proyecto 2 */}
          <div className="border border-neutral-800 rounded-2xl overflow-hidden hover:border-teal-400 transition h-full flex flex-col">
            <Image
              src="/proyecto2.jpg"
              alt="Proyecto 2"
              width={500}
              height={300}
              className="object-cover h-[220px] w-full"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-2">Landing Page</h3>
              <p className="text-neutral-400 text-sm">
                Página optimizada para ventas.
              </p>
              <div className="flex-grow"></div>
            </div>
          </div>

          {/* Proyecto 3 */}
          <div className="border border-neutral-800 rounded-2xl overflow-hidden hover:border-teal-400 transition h-full flex flex-col">
            <Image
              src="/proyecto3.jpg"
              alt="Proyecto 3"
              width={500}
              height={300}
              className="object-cover h-[220px] w-full"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-2">Tienda Online</h3>
              <p className="text-neutral-400 text-sm">
                Ecommerce con pagos integrados.
              </p>
              <div className="flex-grow"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
