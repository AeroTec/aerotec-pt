import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className= /*"flex-grow bg-[#001333] text-white py-12"*/ "flex-grow bg-[#001333] text-white pt-20 pb-12">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="bg-[#1a1a1a] p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-center">Mensagem da Presidente</h2>

            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:order-2 flex-shrink-0">
                <div className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-full overflow-hidden">
                  <Image
                    src="/mariana_carvalho.png"
                    alt="Presidente"
                    width={160}
                    height={160}
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="md:order-1 space-y-4">
                <p style={{ textAlign: "justify" }}>
                  O AeroTéc, fundado em 2015, mas com uma história profunda, sempre teve como principal aspeto da sua
                  doutrina a sua versatilidade e dinamismo, de modo a melhorar sempre, e demonstrar excelência nos
                  desafios enfrentados e, acima de tudo, em cada detalhe do trabalho realizado.
                </p>

                <p style={{ textAlign: "justify" }}>
                  Ao longo da vida estudantil dos nossos membros, o AeroTéc tem como principal objetivo representar um
                  espaço de partilha, que nos permite crescer e evoluir como futuros engenheiros e, acima de tudo, como
                  pessoas.
                </p>

                <p style={{ textAlign: "justify" }}>
                  Tal acontece através do trabalho exímio dos nossos 9 projetos, que nos dão a chance de aplicarmos
                  tanto conhecimentos teóricos ensinados nos cursos à qual envergamos, como também adquirirmos uma
                  plétora de outras capacidades cruciais no mercado de trabalho: trabalho em equipa, contacto com o
                  mundo empresarial,...
                </p>

                <p style={{ textAlign: "justify" }}>
                  Apesar destes objetivos e aspetos diversos que desenvolvemos, o AeroTéc nutre sempre a coesão no
                  trabalho desenvolvido, procurando fornecer a cada um dos nossos membros um espaço de partilha
                  positivo, em que cada um de nós possa aprender e se desenvolver enquanto indivíduos ao máximo!
                </p>

                <p className="text-right">Mariana Carvalho - Presidente</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-16">
            <Link
              href="/equipa"
              className="bg-[#00a0e4] text-white px-6 py-3 rounded-full font-bold hover:bg-[#0088c3] transition-colors"
            >
              CONHECE A NOSSA EQUIPA!
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

