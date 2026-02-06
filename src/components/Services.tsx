const services = [
  {
    title: "Massage détente",
    price: "30€",
    desc: "Relaxation, relâchement des tensions, recentrage.",
    image:
      "https://images.pexels.com/photos/6560298/pexels-photo-6560298.jpeg",
    creditLabel: "Photo by Anna Tarazevich",
    creditUrl:
      "https://www.pexels.com/photo/a-woman-having-a-stone-massage-6560298/",
  },
  {
    title: "Massage sportif",
    price: "50€",
    desc: "Récupération, travail musculaire, décontraction.",
    image:
      "https://images.pexels.com/photos/6629522/pexels-photo-6629522.jpeg",
    creditLabel: "Photo by Karolina Grabowska (kaboompics.com)",
    creditUrl:
      "https://www.pexels.com/photo/woman-during-massage-therapy-6629522/",
  },
  {
    title: "Reboutement",
    price: "50€ à 200€",
    desc: "Tarif selon l’intensité des tensions et la séance.",
    image:
      "https://images.pexels.com/photos/6629530/pexels-photo-6629530.jpeg",
    creditLabel: "Photo by Karolina Grabowska (kaboompics.com)",
    creditUrl:
      "https://www.pexels.com/photo/woman-during-massage-therapy-6629530/",
  },
  {
    title: "Magnétiseur énergétique",
    price: "30€ à 200€+",
    desc: "Tarif selon la pathologie et le travail énergétique.",
    image:
      "https://images.pexels.com/photos/6560302/pexels-photo-6560302.jpeg",
    creditLabel: "Photo by Anna Tarazevich",
    creditUrl:
      "https://www.pexels.com/photo/a-person-touching-a-woman-s-back-while-holding-a-basalt-stone-6560302/",
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-orange-50 py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center text-orange-700">
          Prestations
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-sm border border-orange-100 overflow-hidden"
            >
              <div className="w-full h-40 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                  <span className="bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">
                    {s.price}
                  </span>
                </div>

                <p className="mt-3 text-gray-700 text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ✅ Crédits sous la grille */}
        <div className="mt-8 text-xs text-gray-500 space-y-1">
          {services.map((s, i) => (
            <p key={i}>
              {s.creditLabel}:{" "}
              <a
                href={s.creditUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-orange-700"
              >
                {s.creditUrl}
              </a>
            </p>
          ))}
        </div>

        <p className="text-center mt-10 text-sm text-gray-600 italic">
          Les tarifs variables sont ajustés selon la séance.
        </p>
      </div>
    </section>
  )
}
