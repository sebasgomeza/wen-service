export default function Clientes() {
  return (
    <section id="clientes" className="py-20 bg-black text-white">
      <h2 className="text-4xl font-bold text-center mb-12">
        Empresas que confían en nosotros
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto px-6 opacity-70">
        <div className="text-center">Copec</div>
        <div className="text-center">Webprend</div>
        <div className="text-center">PC Factory</div>
        <div className="text-center">SP Digital</div>
      </div>
    </section>
  )
}
