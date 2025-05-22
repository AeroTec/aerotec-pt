import Image from "next/image";
import { leadership, fiscalCouncil, generalAssemblyBoard } from "../../components/teamMembers";
import TeamMemberCard from "../../components/teamMemberCard";
import Navbar from "../../components/navbar";

function renderSection(title: string, members: any[], bgColor: string) {
  return (
    <section 
    className="py-16 px-6 md:px-12 lg:px-24"
    style={{ backgroundColor: bgColor }}
    >
      <h2 className="text-2xl font-bold mb-6 text-center text-white">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {members.map((member, idx) => (
          <TeamMemberCard key={idx} member={member} />
        ))}
      </div>
    </section>
  );
}

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white text-[#001333]">
        {/* Imagem de capa com título */}
        <section className="relative w-full h-[400px]">
          <Image
            src="/images/aerotec-team/800x800-placeholder.png"
            alt="Equipa AeroTéc"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="brightness-75"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white text-4xl md:text-6xl font-bold drop-shadow-lg">
              A NOSSA EQUIPA
            </h1>
          </div>
        </section>

        {/* As secções da equipa */}
        {renderSection("Direção", leadership, "rgb(8,20,52)")}
        {renderSection("Conselho Fiscal", fiscalCouncil, "rgb(40,36,36)")}
        {renderSection("Mesa da Assembleia Geral", generalAssemblyBoard, "rgb(8,20,52)")}
      </main>
    </>
  );
}
