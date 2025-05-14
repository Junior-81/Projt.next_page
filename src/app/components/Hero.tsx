import Image from 'next/image'

export default function Hero() {
  return (
    <section className="py-24 px-6 w-full bg-gradient-to-br from-blue-100 via-blue-200 to-purple-100">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Conteúdo textual */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            A Landing Page moderna para Desenvolvedores Next & React
          </h1>

          <p className="text-gray-600 mb-6">
            A maneira mais fácil de criar uma landing page em segundos
          </p>

          <a
            href="https://www.figma.com/design/Ua2BErgGTC4pbbc5NmfvwQ/Next-JS-Landing-Page-Template--Community-?node-id=0-1&p=f&t=DtQuaTvzt5Wuer5B-0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#00A3FF] text-white px-8 py-2 rounded hover:bg-[#0081CC] transition-colors"
          >
            Baixar Tema Gratuito
          </a>
        </div>

        {/* Ilustração */}
        <div className="flex-1 relative h-[400px]">
          <Image
            src="/globe.svg"
            alt="Hero Illustration"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  )
}
