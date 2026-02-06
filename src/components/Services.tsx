const services = [
  {
    title: "Massage détente",
    price: "30€",
    desc: "Idéal pour relâcher les tensions et retrouver un vrai moment de calme.",
  },
  {
    title: "Massage sportif",
    price: "50€",
    desc: "Récupération, décrispation musculaire et préparation/retour après effort.",
  },
  {
    title: "Reboutement",
    price: "50€ à 200€",
    desc: "Tarif selon l’intensité et la complexité des tensions à traiter.",
  },
  {
    title: "Magnétiseur énergétique",
    price: "30€ à 200€+",
    desc: "Tarif selon la pathologie et le travail énergétique nécessaire.",
  },
]

export default function Services() {
  return (
    <section className="bg-orange-50 py-16 px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">
          <span className="text-orange-700">Prestations</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-sm border border-orange-100 p-6">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <span className="bg-orange-500 text-white text-sm font-semibold px-3 py-1 rounded-full whitespace-nowrap">
                  {s.price}
                </span>
              </div>
              <p className="mt-3 text-gray-700 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <p className="text-center mt-10 text-sm text-gray-600 italic">
          Les tarifs “à variation” sont ajustés selon la séance et la situation.
        </p>
      </div>
    </section>
  )
}
