import Image from "next/image"
import Link from "next/link"


export default function MemberCard({ name, role, photoUrl, linkedin }: TeamMember) {
  const CardContent = (
    <div className="group">
      <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
        {/* Foto do membro - ocupa todo o card */}
        <Image
          src={photoUrl || "/placeholder.svg?height=320&width=240"}
          alt={name}
          width={240}
          height={320}
          className="w-full h-full object-cover"
        />

        {/* Overlay gradiente na parte inferior para melhor legibilidade */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent h-32 z-10"></div>

        {/* Informações na parte inferior da imagem */}
        <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
          {/* Nome */}
          <h3 className="text-xl font-bold text-white text-center mb-2">{name}</h3>

          {/* Cargo */}
          <p className="text-base text-white text-center opacity-90">{role}</p>
        </div>
      </div>
    </div>
  )

  // Se tem LinkedIn, envolve em Link, senão retorna o card normal
  if (linkedin) {
    return (
      <Link href={linkedin} target="_blank" rel="noopener noreferrer">
        {CardContent}
      </Link>
    )
  }

  return CardContent
}
