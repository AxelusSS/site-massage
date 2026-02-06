import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-orange-600 to-orange-500 text-white flex flex-col items-center justify-center text-center px-6">
      <motion.img
        src="/logo.png" // logo sans fond (transparent)
        alt="Logo"
        className="w-40 h-40 md:w-56 md:h-56 mb-8 object-contain drop-shadow"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      />

      <motion.h1
        className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 drop-shadow-sm"
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Massages & Bien-être
      </motion.h1>

      <motion.p
        className="text-lg md:text-2xl text-orange-50 max-w-2xl"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Détente, sportif, reboutement et énergétique — sur rendez-vous.
      </motion.p>
    </section>
  )
}
