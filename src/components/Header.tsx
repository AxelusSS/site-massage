import { Instagram, Facebook } from "lucide-react"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-orange-100">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-gray-700">
          <a className="hover:text-orange-600" href="#about">À propos</a>
          <a className="hover:text-orange-600" href="#services">Prestations</a>
          <a className="hover:text-orange-600" href="#contact">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg hover:bg-orange-50 text-gray-700 hover:text-orange-600"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5" />
          </a>

          <a
            href="https://www.instagram.com/bisonblanc7/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg hover:bg-orange-50 text-gray-700 hover:text-orange-600"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </div>
    </header>
  )
}
