import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function EquipasPage() {
  return (
    <main >
      <Navbar />

      {/* Secção da fotografia da equipa */}
      <section className="w-full h-80 relative pt-16">
        {/* Imagem de fundo */}
        <img
          src="/images/800x800-placeholder.png"
          alt="Fotografia da equipa"
          className="w-full h-full object-cover"
        />

        {/* Texto sobre a imagem */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-5xl font-bold">EQUIPA</h1>
        </div>
      </section>

      {/* Secção 1 - Direção */}
      <section className="bg-[#001333] text-white py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
            <h1 className="text-4xl font-bold mb-8 text-center text-white">DIREÇÃO</h1>
        </div>
      </section>

      {/* Secção 2 - Conselho Fiscal */}
      <section className="bg-[#282424] text-white py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
            <h2 className="text-4xl font-bold mb-8 text-center text-white">CONSELHO FISCAL</h2>
        </div>
      </section>

      {/* Secção 3 - Mesa */}
      <section className="bg-[#001333] text-gray-800 py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
            <h2 className="text-4xl font-bold mb-8 text-center text-white">MESA</h2>
        </div>
      </section>

      <Footer />
    </main>
  )
}
