import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="h-screen bg-black text-white flex flex-col items-center justify-center text-center px-6">
      {/* Logo */}
      <motion.img
        src="/logo.png"
        alt="JP Pizza"
        className="w-40 h-40 md:w-56 md:h-56 mb-8 object-contain"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      />

      {/* Titre */}
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        JP Pizza
      </motion.h1>

      {/* Slogan */}
      <motion.p
        className="text-lg md:text-2xl text-gray-300 max-w-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Manger ici ou là-bas sur place ?
      </motion.p>
    </section>
  )
}
