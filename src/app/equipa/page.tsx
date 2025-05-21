import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function EquipasPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow bg-[#001333] text-white py-12">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="bg-[#1a1a1a] p-8 rounded-lg">
            <h1 className="text-3xl font-bold mb-6 text-center">EQUIPAS</h1>
            <p className="mb-4 text-justify">
              Início da página sobre as equipas, alalallalala
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
