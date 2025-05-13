export default function Hero() {
  return (
    <section className="py-20 px-6 text-center bg-white">
      <div>
        <h1 className="text-4xl font-bold mb-4 text-gray-900">
          A Landing Page moderna para{" "}
          <span className="text-[#00A3FF]">desenvolvedores Next</span>
        </h1>
        <p className="text-gray-600 mb-8">
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
    </section>
  )
}