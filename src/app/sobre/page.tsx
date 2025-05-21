import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function SobrePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow bg-[#001333] text-white py-12">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="bg-[#1a1a1a] p-8 rounded-lg">
            <h1 className="text-3xl font-bold mb-6 text-center">Sobre o AeroTéc</h1>
            <p className="mb-4 text-justify">
              Fundado em 2015, o AeroTéc é o núcleo de estudantes de Engenharia Aeroespacial do Instituto Superior Técnico.
              Surgiu da vontade de construir um espaço de partilha, crescimento académico e desenvolvimento pessoal.
            </p>
            <p className="mb-4 text-justify">
              Ao longo dos anos, o núcleo organizou inúmeros eventos, desenvolveu projetos inovadores e colaborou com a indústria
              e a academia, reforçando a ligação entre os estudantes e o setor aeroespacial.
            </p>
            <p className="text-justify">
              Orgulhamo-nos da nossa cultura de excelência, dinamismo e entreajuda. O AeroTéc é, acima de tudo, feito por estudantes
              e para estudantes — impulsionando o futuro da engenharia aeroespacial em Portugal.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
