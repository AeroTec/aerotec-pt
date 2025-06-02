import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import MemberCard from "@/components/member-card"
import ProjectLogo from "@/components/project-logo"

export default function EquipasPage() {
  // Dados de exemplo para teste
  const direcaoMembers = [
    {
      name: "Mariana Carvalho",
      role: "Presidente",
      photoUrl: "/images/mariana_carvalho.png",
      linkedin: "https://linkedin.com/in/exemplo1",
    },
    {
      name: "João Silva",
      role: "Vice-Presidente",
      photoUrl: "/placeholder.svg?height=128&width=128",
      linkedin: "https://linkedin.com/in/exemplo2",
    },
    {
      name: "Ana Santos",
      role: "Secretária",
      photoUrl: "/images/mariana_carvalho.png",
      linkedin: "https://linkedin.com/in/exemplo3",
    },
    {
      name: "Pedro Costa",
      role: "Tesoureiro",
      photoUrl: "/images/mariana_carvalho.png",
      linkedin: "https://linkedin.com/in/exemplo4",
    },
  ]

  const conselhoFiscalMembers = [
    {
      name: "Maria Oliveira",
      role: "Presidente do Conselho Fiscal",
      photoUrl: "/images/mariana_carvalho.png",
      linkedin: "https://linkedin.com/in/exemplo5",
    },
    {
      name: "Carlos Ferreira",
      role: "Vogal",
      photoUrl: "/placeholder.svg?height=128&width=128",
      linkedin: "https://linkedin.com/in/exemplo6",
    },
  ]

  const mesaMembers = [
    {
      name: "Sofia Rodrigues",
      role: "Presidente da Mesa",
      photoUrl: "/images/mariana_carvalho.png",
      linkedin: "https://linkedin.com/in/exemplo7",
    },
    {
      name: "Miguel Almeida",
      role: "Vice-Presidente da Mesa",
      photoUrl: "/placeholder.svg?height=128&width=128",
      linkedin: "https://linkedin.com/in/exemplo8",
    },
    {
      name: "Beatriz Lima",
      role: "Secretária da Mesa",
      photoUrl: "/placeholder.svg?height=128&width=128",
      linkedin: "https://linkedin.com/in/exemplo9",
    },
  ]

  const projects = [
    {
      name: "ACE Pilot",
      logo: "/images/acep_contorno.png",
      link: "/ACE-Pilot"
    },
    {
      name: "ATLAS",
      logo: "/images/acep_contorno.png",
      link: "/ATLAS"
    },
    {
      name: "BLUE",
      logo: "/images/acep_contorno.png",
      link: "/blue"
    },
    {
      name: "C.I.A",
      logo: "/images/acep_contorno.png",
      link: "/cia"
    },
    {
      name: "RED",
      logo: "/images/acep_contorno.png",
      link: "/red"
    },
    {
      name: "Revista Aeroespacial",
      logo: "/images/acep_contorno.png",
      link: "/revista"
    },
    {
      name: "Semana Aeroespacial",
      logo: "/images/acep_contorno.png",
      link: "/semana"
    },
    {
      name: "WebDev",
      logo: "/images/acep_contorno.png",
      link: "/webdev"
    },
    {
      name: "Workshop Rockets",
      logo: "/images/acep_contorno.png",
      link: "/workshopRockets"
    },
  ]

  return (
    <main>
      <Navbar transparent={true} />

      {/* Secção da fotografia da equipa */}
      <section className="w-full h-120 relative data-hero">
        {/* Imagem de fundo */}
        <img
          src="/images/800x800-placeholder.png"
          alt="Fotografia da equipa"
          className="w-full h-full object-cover"
        />

        {/* Texto sobre a imagem */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-5xl">Equipa</h1>
        </div>
      </section>

      {/* Secção 1 - Direção */}
      <section className="bg-[#001333] text-white py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <h1 className="text-4xl mt-[-2rem] mb-16 text-center text-white">Direção</h1>

          {/* Grid de member cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {direcaoMembers.map((member, index) => (
              <MemberCard
                key={index}
                name={member.name}
                role={member.role}
                photoUrl={member.photoUrl}
                linkedin={member.linkedin}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Secção 2 - Conselho Fiscal */}
      <section className="bg-[#282424] text-white py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <h2 className="text-4xl mt-[-2rem] mb-16 text-center text-white">Conselho Fiscal</h2>

          {/* Grid de member cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {conselhoFiscalMembers.map((member, index) => (
              <MemberCard
                key={index}
                name={member.name}
                role={member.role}
                photoUrl={member.photoUrl}
                linkedin={member.linkedin}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Secção 3 - Mesa */}
      <section className="bg-[#001333] text-white py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <h2 className="text-4xl mt-[-2rem] mb-16 text-center text-white">Mesa da Assembleia Geral</h2>

          {/* Grid de member cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {mesaMembers.map((member, index) => (
              <MemberCard
                key={index}
                name={member.name}
                role={member.role}
                photoUrl={member.photoUrl}
                linkedin={member.linkedin}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Secção - Outros membros */}
      <section className="bg-[#1a1a1a] text-white py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <h2 className="text-4xl mt-[-2rem] text-center text-white mb-3">Outros Membros</h2>
           <div className="mx-auto w-24 h-1 bg-white rounded mb-10"></div>
            <p className= "text-center text-white text-xl font-mono mb-10">Gostavas de saber mais sobre a nossa equipa? Dá um salto às páginas dos nossos projetos!</p>

          <div className="flex flex-wrap justify-center gap-8">
          {projects.map((project, index) => (
            <ProjectLogo
              key={index}
              name={project.name}
              logo={project.logo}
              link={project.link}
            />
          ))}

          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
