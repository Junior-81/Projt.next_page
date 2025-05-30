import Image from 'next/image'

export default function Features() {
  return (
    <div className="flex min-h-screen flex-col items-center p-24">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-4xl font-bold text-center mb-32">
          Explore os recursos do Next.js o tornam a escolha ideal para aplicações React!.
        </h2>

        {/* Bloco 1 */}
        <section className="mb-32">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="text-left">
              <h3 className="text-2xl font-semibold text-gray-900 mb-8">
                Performance com Imagens & Fonte Otimizadas
              </h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  Com o Next.js, a performance do seu site deixa de ser um problema.
                  A plataforma realiza otimização automática de imagens e fontes, com técnicas como lazy loading, WebP conversion, redimensionamento inteligente e carregamento assíncrono.
                </p>
                <p>
                  Isso significa carregamento mais rápido, menor consumo de dados e melhor pontuação no Google Lighthouse, essencial para SEO e experiência do usuário.
                </p>
                <p>
                  Além disso, tudo isso é feito de forma transparente, sem que você precise configurar nada manualmente. Basta usar o componente {'<Image />'} e deixar o Next.js fazer o trabalho pesado.
                </p>
              </div>
            </div>
            <div className="relative h-72 w-full">
              <Image
                src="/window.svg"
                alt="Otimização de Performance"
                fill
                className="object-contain p-4 hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </section>

        {/* Bloco 2 */}
        <section className="mb-32">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-72 w-full order-2 md:order-1">
              <Image
                src="/globe.svg"
                alt="App Router e Layouts"
                fill
                className="object-contain p-4 hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="text-left order-1 md:order-2">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Arquitetura escalável com App Router e layouts aninhados
              </h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  A nova arquitetura do Next.js (a partir da versão 13) revoluciona a forma como construímos aplicações web modernas.
                </p>
                <p>
                  Com o novo App Router, você estrutura sua aplicação usando layouts aninhados, carregamento paralelo e streaming com React Server Components, tudo pensado para escalabilidade e modularidade.
                </p>
                <p>
                  Você consegue dividir responsabilidades entre seções do site, reutilizar trechos de interface com facilidade e ainda se beneficiar de renderização progressiva, melhorando a percepção de velocidade no carregamento de cada página.
                </p>
                <p>
                  Esse modelo não só facilita a manutenção como também prepara sua aplicação para crescer com estabilidade e performance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Bloco 3 */}
        <section className="mb-32">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="text-left">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Backend integrado com rotas de API nativas
              </h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  Com Next.js, você não precisa de um servidor separado para lidar com requisições backend. A plataforma oferece suporte completo a rotas de API, permitindo que você escreva endpoints diretamente na pasta /api.
                </p>
                <p>
                  Isso significa que você pode lidar com autenticação, envio de formulários, acesso a bancos de dados, consumo de APIs externas e muito mais — tudo sem sair do seu projeto React.
                </p>
                <p>
                  Essas rotas são executadas como serverless functions em produção (como no Vercel), o que garante escalabilidade automática e baixíssimo tempo de resposta.
                </p>
                <p>
                  Esse modelo simplifica o desenvolvimento fullstack e permite que você construa aplicações completas com uma única stack, sem precisar configurar um backend tradicional.
                </p>
                <p>
                  Além disso, com suporte a TypeScript, middleware, validação de requests e integração fácil com ORMS como Prisma, o desenvolvimento torna-se ainda mais poderoso e seguro.
                </p>
              </div>
            </div>
            <div className="relative h-72 w-full">
              <Image
                src="/file.svg"
                alt="API Routes"
                fill
                className="object-contain p-4 hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}