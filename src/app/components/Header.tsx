import Link from 'next/link'

export default function Header() {
  return (
    <header className="w-full py-4 px-6 bg-white shadow-sm">
      <nav className="max-w-5xl mx-auto flex justify-between items-center">
        <a 
          href="https://github.com/Junior-81" 
          className="text-xl font-semibold text-gray-900"
          target="_blank"
          rel="noopener noreferrer"
        >
          Starter
        </a>
        <div className="flex items-center gap-1">
          <a 
            href="https://github.com/Junior-81" 
            className="text-gray-600 hover:text-gray-900"
            target="_blank"
            rel="noopener noreferrer"
          >
            Entrar
          </a>
          <span className="text-gray-400">/</span>
          <a 
            href="https://github.com/Junior-81" 
            className="text-gray-600 hover:text-gray-900"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cadastrar
          </a>
        </div>
      </nav>
    </header>
  )
}