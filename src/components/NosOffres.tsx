const offres = [
  {
    titre: "🍕 Menu complet",
    description: [
      { text: "Margherita", prix: "$30" },
      { text: "Four Cheese", prix: "$30" },
      { text: "Hawaiian", prix: "$100" },
      { text: "Calzone", prix: "$40" },
    ],
  },
  {
    titre: "🍕 Prix unitaire",
    description: [
      { text: "Margherita", prix: "$15" },
      { text: "Four Cheese", prix: "$15" },
      { text: "Calzone", prix: "$20" },
    ],
  },
  {
    titre: "🍰 Desserts",
    description: [
      { text: "Tiramisu", prix: "$10" },
      { text: "Glace Italienne", prix: "$10" },
      { text: "Panna cotta", prix: "$15" },
    ],
  },
  {
    titre: "🥤 Boissons",
    description: [
      { text: "Pepsi", prix: "$10" },
      { text: "Sprite", prix: "$10" },
      { text: "Ice Tea", prix: "$10" },
    ],
  },
]

export default function NosOffres() {
  return (
    <section className="bg-gray-100 dark:bg-zinc-900 py-24 px-6">
      <h2 className="text-4xl font-extrabold text-center mb-16 text-black dark:text-white">
        Nos Tarifs
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {offres.map((offre, index) => (
          <div
            key={index}
            className="relative rounded-3xl overflow-hidden bg-white dark:bg-zinc-800 shadow-xl group hover:scale-[1.02] transition-transform duration-300"
          >
            <div className="bg-white dark:bg-black px-6 py-5 text-center rounded-t-2xl shadow-md">
              <h3 className="text-xl font-bold tracking-wide uppercase text-black dark:text-white">
                {offre.titre}
              </h3>
            </div>

            <div className="px-6 py-8 space-y-4">
              {offre.description.map((item, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-start text-gray-700 dark:text-gray-200 border-b border-gray-200 dark:border-zinc-700 pb-2"
                >
                  <div className="flex items-start">
                    <span className="font-bold mr-2 mt-1">▹</span>
                    <p>{item.text}</p>
                  </div>
                  <p className="text-right font-semibold text-sm whitespace-nowrap">
                    {item.prix}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <p className="text-center mt-16 text-sm text-gray-600 dark:text-gray-400 italic">
        Sur place, à emporter ou en Click&apos;n Collect.
      </p>
    </section>
  )
}
