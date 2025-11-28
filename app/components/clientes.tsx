"use client";

import Image from "next/image";

export default function Clientes() {
  return (
    <section
      id="clientes"
      className="py-28 bg-white text-black border-t border-gray-200"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold mb-4">
          Empresas que <span className="text-teal-500">confían en nosotros</span>
        </h2>

        <p className="text-gray-500 max-w-2xl mx-auto mb-16">
          Marcas y emprendimientos que han confiado en nuestro trabajo para
          potenciar su presencia digital.
        </p>

        {/* Logos */}
        <div className="grid grid-cols-2 md:grid-cols-4 items-center gap-12 opacity-80">
          <div className="flex justify-center grayscale hover:grayscale-0 transition">
            <Image src="/clientes/copec.png" alt="Copec" width={140} height={70} />
          </div>

          <div className="flex justify-center grayscale hover:grayscale-0 transition">
            <Image src="/clientes/webprend.png" alt="Webprend" width={140} height={70} />
          </div>

          <div className="flex justify-center grayscale hover:grayscale-0 transition">
            <Image src="/clientes/pcfactory.png" alt="PC Factory" width={140} height={70} />
          </div>

          <div className="flex justify-center grayscale hover:grayscale-0 transition">
            <Image src="/clientes/spdigital.png" alt="SP Digital" width={140} height={70} />
          </div>
        </div>
      </div>
    </section>
  );
}

