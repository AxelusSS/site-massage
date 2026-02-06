import { motion } from "framer-motion"

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-orange-50 flex flex-col items-center justify-center">
      <img src="/logo.png" alt="Logo" className="w-20 h-20 object-contain mb-6" />

      <motion.div
        className="w-10 h-10 rounded-full border-4 border-orange-200 border-t-orange-500"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 0.9, ease: "linear" }}
      />
    </div>
  )
}
