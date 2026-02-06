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
    <Home />
  )
}

export default App
