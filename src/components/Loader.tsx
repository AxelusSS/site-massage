import { motion } from "framer-motion"

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <motion.img
        src="/logo.png"
        alt="Logo Cabinet"
        className="w-256 h-256"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: [0.5, 1.1, 1] }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "loop" }}
      />
    </div>
  )
}
