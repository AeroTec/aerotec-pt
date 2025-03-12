import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Mail, Linkedin, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* AeroTéc Column */}
          <div>
            <h3 className="text-2xl font-bold mb-6">AeroTéc</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/aerocloud" className="text-gray-400 hover:text-white transition-colors">
                  AeroCloud
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-gray-400 hover:text-white transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/projetos" className="text-gray-400 hover:text-white transition-colors">
                  Projetos
                </Link>
              </li>
              <li>
                <Link href="/equipa" className="text-gray-400 hover:text-white transition-colors">
                  Equipa
                </Link>
              </li>
              <li>
                <Link href="/recrutamento" className="text-gray-400 hover:text-white transition-colors">
                  Recrutamento
                </Link>
              </li>
              <li>
                <Link href="/curriculos" className="text-gray-400 hover:text-white transition-colors">
                  Currículos
                </Link>
              </li>
            </ul>
          </div>

          {/* Projetos Column */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Projetos</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/projetos/ace-pilot" className="text-gray-400 hover:text-white transition-colors">
                  ACE Pilot
                </Link>
              </li>
              <li>
                <Link href="/projetos/atlas" className="text-gray-400 hover:text-white transition-colors">
                  ATLAS
                </Link>
              </li>
              <li>
                <Link href="/projetos/blue" className="text-gray-400 hover:text-white transition-colors">
                  Blue
                </Link>
              </li>
              <li>
                <Link href="/projetos/cia" className="text-gray-400 hover:text-white transition-colors">
                  C.I.A.
                </Link>
              </li>
              <li>
                <Link href="/projetos/red" className="text-gray-400 hover:text-white transition-colors">
                  RED
                </Link>
              </li>
              <li>
                <Link
                  href="/projetos/revista-aeroespacial"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Revista Aeroespacial
                </Link>
              </li>
              <li>
                <Link href="/projetos/semana-aeroespacial" className="text-gray-400 hover:text-white transition-colors">
                  Semana Aeroespacial
                </Link>
              </li>
              <li>
                <Link href="/projetos/webdev" className="text-gray-400 hover:text-white transition-colors">
                  Web.Dev
                </Link>
              </li>
              <li>
                <Link href="/projetos/workshop-rockets" className="text-gray-400 hover:text-white transition-colors">
                  Workshop Rockets
                </Link>
              </li>
            </ul>
          </div>

          {/* Contactos Column */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Contactos</h3>
            <p className="text-gray-400 mb-6">Podes entrar em contacto connosco através de:</p>
            <div className="flex space-x-6">
              <Link href="#" aria-label="Facebook" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={24} />
              </Link>
              <Link href="#" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={24} />
              </Link>
              <Link href="#" aria-label="Email" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={24} />
              </Link>
              <Link href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={24} />
              </Link>
              <Link href="#" aria-label="YouTube" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={24} />
              </Link>
            </div>
          </div>
        </div>

        {/* Logos */}
        <div className="mt-16 flex flex-wrap justify-center gap-12 items-center">
          <Image
            src="/placeholder.svg?height=60&width=120"
            alt="Técnico Lisboa Logo"
            width={120}
            height={60}
            className="object-contain"
          />
          <Image
            src="/placeholder.svg?height=60&width=180"
            alt="AeroTéc Logo"
            width={180}
            height={60}
            className="object-contain"
          />
          <Image
            src="/placeholder.svg?height=60&width=120"
            alt="Partner Logo"
            width={120}
            height={60}
            className="object-contain"
          />
        </div>
      </div>
    </footer>
  )
}