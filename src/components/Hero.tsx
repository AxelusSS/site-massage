import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-orange-50 to-white text-black flex flex-col items-center justify-center text-center px-6">
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold tracking-tight"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Massages & Bien-être
      </motion.h1>

      <motion.p
        className="mt-4 text-lg md:text-2xl text-gray-700 max-w-2xl"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.6 }}
      >
        Détente, récupération sportive, reboutement et magnétisme — sur rendez-vous.
      </motion.p>

      <motion.a
        href="#contact"
        className="mt-8 inline-block bg-orange-500 text-white font-semibold px-6 py-3 rounded-xl hover:bg-orange-600 transition"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.25, duration: 0.5 }}
      >
        Prendre contact
      </motion.a>
    </section>
  )
}
