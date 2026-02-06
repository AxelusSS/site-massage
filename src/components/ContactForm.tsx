import { useEffect, useState } from "react"

type NotificationType = "success" | "error" | null

// 🔐 Codes SP autorisés (8 chiffres)
const SP_CODES: Record<
  string,
  {
    orgName: "LSPD" | "EMS"
    mention: string
    title: string
  }
> = {
  "09571234": {
    orgName: "LSPD",
    mention: "<@everyone>",
    title: "🚔 Commande Click'n Collect – Police",
  },
  "20485691": {
    orgName: "EMS",
    mention: "<@everyone>",
    title: "🚑 Commande Click'n Collect – EMS",
  },
}

export default function ContactForm() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [notification, setNotification] = useState<{
    message: string
    type: NotificationType
  } | null>(null)

  useEffect(() => {
    if (!notification) return
    const timeout = setTimeout(() => setNotification(null), 4000)
    return () => clearTimeout(timeout)
  }, [notification])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)

    const form = e.currentTarget
    const fullname = (form.elements.namedItem("fullname") as HTMLInputElement).value.trim()
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value.trim()
    const spCode = (form.elements.namedItem("spCode") as HTMLInputElement).value.trim()
    const pickupTime = (form.elements.namedItem("pickupTime") as HTMLInputElement).value.trim()
    const order = (form.elements.namedItem("order") as HTMLTextAreaElement).value.trim()

    // ✅ SP facultatif :
    // - si vide => commande normale
    // - si rempli => doit être valide
    const spEntry = spCode ? SP_CODES[spCode] : null
    if (spCode && !spEntry) {
      setError("❌ Code SP invalide.")
      setNotification({ message: "Code SP invalide.", type: "error" })
      return
    }

    setLoading(true)

    const payload = {
      username: spEntry ? spEntry.orgName : "JP Chawarma",
      content: "@everyone",
      embeds: [
        {
          title: spEntry ? spEntry.title : "🛒 Nouvelle commande Click'n Collect",
          color: 0x2b2d31,
          fields: [
            { name: "👤 Nom Prénom", value: fullname, inline: true },
            { name: "📞 Numéro", value: phone, inline: true },
            { name: "🕒 Retrait prévu", value: pickupTime, inline: true },
            { name: "📝 Code SP", value: spCode || "—", inline: true },
            { name: "🧾 Commande", value: order || "—" },
          ],
          footer: { text: "Click'n Collect – GTA RP" },
          timestamp: new Date().toISOString(),
        },
      ],
    }

    try {
      const res = await fetch(
        "https://discord.com/api/webhooks/1390420118919450624/hNyJNS2MJn8CKQGjwvqPBFQlAXf2YO8relbRSLFw39OeGAtehDwh9AjTyVn4WJS6hxGo",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      )

      if (!res.ok) throw new Error("Webhook error")

      setNotification({ message: "✅ Commande envoyée sur Discord !", type: "success" })
      form.reset()
    } catch {
      setError("❌ Erreur lors de l'envoi.")
      setNotification({ message: "Erreur lors de l'envoi.", type: "error" })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="bg-white py-16 px-8 max-w-2xl mx-auto mt-20 mb-10">
      <h2 className="text-3xl font-bold mb-6">Click'n Collect</h2>

      {error && (
        <div className="mb-4 p-3 border border-red-300 bg-red-50 text-red-800 rounded">
          {error}
        </div>
      )}

      {notification && (
        <div
          className={`mb-4 p-3 border rounded ${
            notification.type === "success"
              ? "border-green-300 bg-green-50 text-green-800"
              : "border-red-300 bg-red-50 text-red-800"
          }`}
        >
          {notification.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="fullname"
          type="text"
          placeholder="Nom Prénom"
          required
          className="w-full p-3 border rounded"
        />

        <input
          name="phone"
          type="text"
          placeholder="Numéro de téléphone"
          required
          className="w-full p-3 border rounded"
        />

        {/* ✅ Code SP facultatif */}
        <input
          name="spCode"
          type="text"
          placeholder="Code SP (optionnel)"
          className="w-full p-3 border rounded"
        />

        <input
          name="pickupTime"
          type="text"
          placeholder="Heure de retrait (ex: 21h30)"
          required
          className="w-full p-3 border rounded"
        />

        <textarea
          name="order"
          placeholder="Commande"
          rows={5}
          required
          className="w-full p-3 border rounded"
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition disabled:opacity-50"
        >
          {loading ? "Envoi en cours..." : "Envoyer"}
        </button>
      </form>
    </section>
  )
}
