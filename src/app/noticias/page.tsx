"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { useState } from "react"

export default function NoticiasPage() {

  const [showTerms, setShowTerms] = useState(false);

  return (
    <main>
      <Navbar />

      {/* Secção da fotografia das noticias */}
      <section className="w-full h-120 relative data-hero">
        {/* Imagem de fundo */}
        <img
          src="/images/800x800-placeholder.png"
          alt="Fotografia das noticias"
          className="w-full h-full object-cover"
        />

        {/* Texto sobre a imagem */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-5xl font-serif font-bold">Notícias</h1>
        </div>
      </section>

      {/* Secção - Subscrição */}
      <section className="bg-[#1a1a1a] text-white py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <h2 className="text-4xl mt-[-2rem] text-center text-white mb-3">Subscrição</h2>
        <div className="mx-auto w-24 h-1 bg-white rounded mb-10"></div>
        <p className="text-center text-white text-xl font-mono mb-10">
          Queres estar sempre a par das novidades do AeroTéc? Deixa aqui o teu email e receberás tudo a tempo, sem falhas!
        </p>

          {/* Formulário de subscrição */}
          <form className="max-w-lg mx-auto flex flex-col gap-6">
            {/* Nome */}
            <div className="relative">
              <input
                type="text"
                name="name"
                id="name"
                required
                className="peer w-full px-4 pt-6 pb-2 text-white bg-transparent border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder=" "
              />
              <label
                htmlFor="name"
                className="absolute left-4 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-gray-400"
              >
                Nome
              </label>
            </div>

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                name="email"
                id="email"
                required
                className="peer w-full px-4 pt-6 pb-2 text-white bg-transparent border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder=" "
              />
              <label
                htmlFor="email"
                className="absolute left-4 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-gray-400"
              >
                Email
              </label>
            </div>

            {/* Checkbox + Button */}
            <label className="flex items-center gap-2 text-white">
              <input type="checkbox" name="terms" required className="w-4 h-4" />
              Aceito os{""}
            <span
              onClick={() => setShowTerms(!showTerms)}
              className="underline cursor-pointer"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') setShowTerms(!showTerms);
              }}
            >
              Termos e Condições
            </span>
            </label>

            {/* Show/hide terms text */}
            {showTerms && (
              <div className="-mt-8 max-w-xl mx-auto text-gray-300 text-sm text-justify leading-relaxed p-4">
                Os dados recolhidos no presente formulário serão processados e armazenados informaticamente. O
                AeroTéc - Núcleo de Estudantes de Engenharia Aeroespacial do Técnico é a entidade responsável pelo
                tratamento dos dados pessoais. A informação fornecida será tratada de forma confidencial e utilizada
                exclusivamente para a partilha de notícias do Núcleo. Nos termos da legislação aplicável, será
                garantido ao titular o direito ao acesso, retificação, atualização ou eliminação dos seus dados
                pessoais, mediante pedido por escrito dirigido à entidade responsável pelo tratamento dos dados e
                remetido por correio eletrónico para o endereço: {""}
                <a href="mailto:direcao@aerotec.tecnico.ulisboa.pt"
                className="text-blue-400 underline hover:text-blue-600 cursor-pointer">
                  direcao@aerotec.tecnico.ulisboa.pt
                </a>.
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="mb-20 bg-blue-600 colour:#001333 text-white py-2 rounded transition-colors"
            >
              SUBSCREVER
            </button>
          </form>


        </div>
      </section>

    <Footer />
    </main>
  )
}
