import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function NoticiasPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow bg-[#001333] text-white py-12">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="bg-[#1a1a1a] p-8 rounded-lg">
            <h1 className="text-3xl font-bold mb-6 text-center">NOTÍCIAS</h1>
            <p className="mb-4 text-justify">
              TESTE DA PAGINA DE NOTICIAS AAAAAAAAAAAAAAAAAAAAAA
              
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
