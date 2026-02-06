import { Facebook, Instagram } from "lucide-react"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-orange-600">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between text-white">
        {/* Logo (plus grand + dépasse un peu) */}
        <a href="#top" className="flex items-center gap-3">
          <img
            src="/logo_orange.png"
            alt="Logo"
            className="h-16 w-auto -mb-6 drop-shadow-lg"
          />
        </a>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold">
          <a className="hover:text-orange-200" href="#about">
            À propos
          </a>
          <a className="hover:text-orange-200" href="#services">
            Prestations
          </a>
          <a className="hover:text-orange-200" href="#contact">
            Contact
          </a>
        </nav>

        {/* Socials */}
        <div className="flex items-center gap-3">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg hover:bg-orange-500/40 text-white"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5" />
          </a>

          <a
            href="https://www.instagram.com/bisonblanc7/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg hover:bg-orange-500/40 text-white"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </div>
    </header>
  )
}
