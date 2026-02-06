const services = [
  {
    title: "Massage détente",
    price: "30€",
    desc: "Relaxation, relâchement des tensions, recentrage.",
    image: "https://images.pexels.com/photos/6628690/pexels-photo-6628690.jpeg",
    creditLabel: "Photo by KoolShooters",
    creditUrl: "https://www.pexels.com/photo/a-woman-having-a-massage-6628690/",
  },
  {
    title: "Massage sportif",
    price: "50€",
    desc: "Récupération, travail musculaire, décontraction.",
    image: "https://images.pexels.com/photos/6629522/pexels-photo-6629522.jpeg",
    creditLabel: "Photo by Karolina Grabowska",
    creditUrl: "https://www.pexels.com/photo/woman-during-massage-therapy-6629522/",
  },
  {
    title: "Reboutement",
    price: "50€ à 200€",
    desc: "Tarif selon l’intensité des tensions et la séance.",
    image: "https://images.pexels.com/photos/6629530/pexels-photo-6629530.jpeg",
    creditLabel: "Photo by Karolina Grabowska",
    creditUrl: "https://www.pexels.com/photo/woman-during-massage-therapy-6629530/",
  },
  {
    title: "Magnétiseur énergétique",
    price: "30€ à 200€+",
    desc: "Tarif selon la pathologie et le travail énergétique.",
    image: "https://images.pexels.com/photos/6560302/pexels-photo-6560302.jpeg",
    creditLabel: "Photo by Anna Tarazevich",
    creditUrl:
      "https://www.pexels.com/photo/a-person-touching-a-woman-s-back-while-holding-a-basalt-stone-6560302/",
  },
]

function formatCreditName(label: string) {
  // "Photo by X" => "X"
  return label.replace(/^Photo by\s*/i, "").trim()
}

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
              className="bg-white rounded-2xl shadow-sm border border-orange-100 overflow-hidden flex flex-col"
            >
              <div className="w-full h-40 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div>
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

                {/* Crédit photo dans la carte */}
                <div className="mt-auto pt-4">
                  <span className="text-xs text-gray-400">
                    By{" "}
                    <a
                      href={s.creditUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-orange-600 no-underline visited:text-gray-400"
                    >
                      {formatCreditName(s.creditLabel)}
                    </a>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center mt-10 text-sm text-gray-600 italic">
          Les tarifs variables sont ajustés selon la séance.
        </p>
      </div>
    </section>
  )
}
