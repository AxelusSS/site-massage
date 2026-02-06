const PHONE_DISPLAY = "06 12 34 56 78"
const PHONE_TEL = "+33612345678"

export default function ContactPhone() {
  return (
    <section id="contact" className="bg-white py-16 px-8 max-w-4xl mx-auto mb-16">
      <h2 className="text-3xl font-bold mb-4">
        <span className="text-orange-600">Contact</span>
      </h2>

      <p className="text-lg text-gray-800">
        Pour un rendez-vous ou une question, contactez-moi directement par téléphone :
      </p>

      <div className="mt-6">
        <a
          href={`tel:${PHONE_TEL}`}
          className="inline-flex items-center justify-center bg-orange-500 text-white font-semibold px-6 py-3 rounded-xl hover:bg-orange-600 transition"
        >
          Appeler {PHONE_DISPLAY}
        </a>
      </div>

      <p className="mt-4 text-sm text-gray-600">
        Si je ne réponds pas, laissez un message ou rappelez un peu plus tard.
      </p>
    </section>
  )
}
