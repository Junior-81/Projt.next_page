import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (    <header className="w-full py-4 px-6 bg-gray-100 shadow-sm">
      <nav className="max-w-5xl mx-auto flex justify-between items-center">        <a 
          href="https://github.com/Junior-81" 
          className="flex items-center gap-2 text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors duration-300"
          target="_blank"
          rel="noopener noreferrer"        >
          <span className="text-2xl hover:scale-125 transition-transform duration-300" role="img" aria-label="signal">📶</span>
          <span>Starter</span>
        </a>
        <div className="flex items-center space-x-4">
          <a 
            href="https://github.com/Junior-81" 
            className="px-4 py-2 text-gray-600 hover:text-white hover:bg-blue-600 rounded-lg transition-all duration-300 ease-in-out transform hover:-translate-y-0.5"
            target="_blank"
            rel="noopener noreferrer"
          >
            Entrar
          </a>
          <a 
            href="https://github.com/Junior-81" 
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-0.5"
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