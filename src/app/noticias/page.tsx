import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function NoticiasPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar transparent={true} />
      
            {/* Secção da fotografia da equipa */}
            <section className="w-full h-80 relative data-hero">
              {/* Imagem de fundo */}
              <img
                src="/images/800x800-placeholder.png"
                alt="Fotografia da equipa"
                className="w-full h-full object-cover"
              />
      
              {/* Texto sobre a imagem */}
              <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-white text-5xl">Notícias</h1>
              </div>
            </section>

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
