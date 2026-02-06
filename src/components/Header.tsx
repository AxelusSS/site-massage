import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/30 dark:bg-black/30 backdrop-blur-md mix-blend-difference" style={{height: "64px"}}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center h-full">
        <div className="text-xl font-bold h-full">
            <a href="#" className="text-black hover:opacity-80 transition h-full flex items-center">
            <img src="/logo_black.png" alt="Logo clair" className="h-40 block dark:hidden" />
            <img src="/logo.png" alt="Logo foncé" className="h-40 hidden dark:block" />
            </a>
        </div>
        <nav className="hidden md:flex space-x-6 text-white font-medium">
        <a href="#collaborateurs" className="hover:text-beige transition">Nos Menus</a>
          <a href="#tarifs" className="hover:text-beige transition">Nos tarifs</a>
          <a href="#contact" className="hover:text-beige transition">Click'n Collect</a>
        </nav>

        <button className="md:hidden text-black" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4 text-black">
            <a href="#collaborateurs" className="block" onClick={toggleMenu}>Nos Menus</a>
          <a href="#tarifs" className="block" onClick={toggleMenu}>Nos tarifs</a>
          <a href="#contact" className="block" onClick={toggleMenu}>Click'n Collect</a>
        </div>
      )}
    </header>
  )
}