import { useEffect, useState } from "react"
import { FileText } from 'lucide-react'
import Home from './pages/Home'
import Loader from './components/Loader'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  if (loading) return <Loader />

  return (
    <>
      <Home />
      <DocsButton />
    </>
  )
}

const DocsButton = () => {
  return (
    <a
      href="/docs"
      className="fixed bottom-4 left-4 bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-xl shadow-lg transition-all z-50"
      title="Accéder aux documents"
    >
      <FileText className="w-6 h-6" />
    </a>
  )
}

export default App
