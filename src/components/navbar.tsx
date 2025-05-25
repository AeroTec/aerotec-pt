"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, Sun, Facebook, Instagram, Mail, Linkedin, Youtube } from "lucide-react"

interface NavbarProps {
  transparent?: boolean
}

export default function Navbar({ transparent = false }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    if (!transparent) return

    const handleScroll = () => {
      // Detecta automaticamente a altura da primeira seção com imagem
      const heroSection = document.querySelector("section[data-hero]") as HTMLElement
      const heroHeight = heroSection ? heroSection.offsetHeight : 320

      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > heroHeight)
    }

    // Executa uma vez no início para definir o estado inicial
    handleScroll()

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleScroll) // Para quando a altura muda

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
    }
  }, [transparent])

  const getBackgroundClass = () => {
    if (!transparent) return "bg-[#001333]"
    return isScrolled ? "bg-[#001333]" : "bg-transparent"
  }

  return (
    <header className={`text-white fixed top-0 w-full h-16 z-50 transition-all duration-300 ${getBackgroundClass()}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/aerotec_globo.png"
              alt="AeroTéc Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/aerocloud" className="hover:text-[#00a0e4] transition-colors">
              AEROCLOUD
            </Link>
            <Link href="/noticias" className="hover:text-[#00a0e4] transition-colors">
              NOTÍCIAS
            </Link>
            <Link href="/sobre" className="hover:text-[#00a0e4] transition-colors">
              SOBRE
            </Link>
            <Link href="/projetos" className="hover:text-[#00a0e4] transition-colors">
              PROJETOS
            </Link>
            <Link href="/equipa" className="hover:text-[#00a0e4] transition-colors">
              EQUIPA
            </Link>
            <Link href="/recrutamento" className="hover:text-[#00a0e4] transition-colors">
              RECRUTAMENTO
            </Link>
            <Link href="/contactos" className="hover:text-[#00a0e4] transition-colors">
              CONTACTOS
            </Link>
          </nav>

          {/* Social Icons */}
          <div className="hidden md:flex items-center space-x-3">
            <Link href="https://www.facebook.com/AeroTecnico/?ref=br_rs" target="_blank" aria-label="Facebook">
              <Facebook size={18} className="hover:text-[#00a0e4] transition-colors" />
            </Link>
            <Link href="https://www.instagram.com/aero.tec/" target="_blank" aria-label="Instagram">
              <Instagram size={18} className="hover:text-[#00a0e4] transition-colors" />
            </Link>
            <Link href="#" aria-label="Email">
              <Mail size={18} className="hover:text-[#00a0e4] transition-colors" />
            </Link>
            <Link href="https://www.linkedin.com/company/aerotec-ist/" target="_blank" aria-label="LinkedIn">
              <Linkedin size={18} className="hover:text-[#00a0e4] transition-colors" />
            </Link>
            <Link href="https://www.youtube.com/channel/UCrTrDSNaMf44AtJlgar5Agw" target="_blank" aria-label="YouTube">
              <Youtube size={18} className="hover:text-[#00a0e4] transition-colors" />
            </Link>
            <button aria-label="Toggle theme">
              <Sun size={18} className="hover:text-[#00a0e4] transition-colors" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#001f4d] py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-3">
            <Link
              href="/aerocloud"
              className="py-2 hover:text-[#00a0e4] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              AEROCLOUD
            </Link>
            <Link
              href="/noticias"
              className="py-2 hover:text-[#00a0e4] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              NOTÍCIAS
            </Link>
            <Link
              href="/sobre"
              className="py-2 hover:text-[#00a0e4] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              SOBRE
            </Link>
            <Link
              href="/projetos"
              className="py-2 hover:text-[#00a0e4] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              PROJETOS
            </Link>
            <Link
              href="/equipa"
              className="py-2 hover:text-[#00a0e4] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              EQUIPA
            </Link>
            <Link
              href="/recrutamento"
              className="py-2 hover:text-[#00a0e4] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              RECRUTAMENTO
            </Link>
            <Link
              href="/contactos"
              className="py-2 hover:text-[#00a0e4] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              CONTACTOS
            </Link>

            {/* Social Icons for Mobile */}
            <div className="flex items-center space-x-4 pt-2">
              <Link href="https://www.facebook.com/AeroTecnico/?ref=br_rs" aria-label="Facebook">
                <Facebook size={20} />
              </Link>
              <Link href="https://www.instagram.com/aero.tec/" aria-label="Instagram">
                <Instagram size={20} />
              </Link>
              <Link href="#" aria-label="Email">
                <Mail size={20} />
              </Link>
              <Link href="https://www.linkedin.com/company/aerotec-ist/" aria-label="LinkedIn">
                <Linkedin size={20} />
              </Link>
              <Link href="https://www.youtube.com/channel/UCrTrDSNaMf44AtJlgar5Agw" aria-label="YouTube">
                <Youtube size={20} />
              </Link>
              <button aria-label="Toggle theme">
                <Sun size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
