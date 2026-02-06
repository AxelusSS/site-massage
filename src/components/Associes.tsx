const associates = [
  {
    name: "Menu complet Margherita",
    role: "Classique",
    specialty: "$30",
    image: "/associes/specterrp.png",
    honoraires: "Pizza + Boisson + Dessert",
  },
  {
    name: "Menu complet Four Cheese",
    role: "Fromage lover",
    specialty: "$30",
    image: "/associes/mendoza.png",
    honoraires: "Pizza + Boisson + Dessert",
  },
  {
    name: "Menu complet Hawaiian",
    role: "Exotique",
    specialty: "$100",
    image: "/associes/litt.png",
    honoraires: "Pizza + Boisson + Dessert",
  },
  {
    name: "Menu complet Calzone",
    role: "Généreux",
    specialty: "$40",
    image: "/associes/ross.png",
    honoraires: "Pizza + Boisson + Dessert",
  },
]

export default function AssociatesSection() {
  return (
    <section className="bg-gray-100 py-24 px-6">
      <h2 className="text-3xl font-bold text-center mb-24">Nos Menus</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-items-center gap-16 max-w-6xl mx-auto">
        {associates.map((a, i) => (
          <div key={i} className="relative w-72">
            <div className="absolute -top-28 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
              <div className="w-56 h-56 flex items-center justify-center">
                <img
                  src={a.image}
                  alt={a.name}
                  className="max-w-full max-h-full object-contain drop-shadow-2xl"
                />
              </div>
              <div className="w-72 h-[4px] bg-gray-800 mt-2" />
            </div>

            <div className="bg-white rounded-2xl shadow-md pt-40 pb-6 px-6 text-center">
              <h3 className="text-xl font-semibold">{a.name}</h3>
              <p className="text-gray-500 text-sm mt-1">{a.role}</p>

              <div className="mt-4 inline-block bg-black text-white text-sm px-4 py-1 rounded-full font-semibold">
                {a.specialty}
              </div>

              <p className="mt-4 text-gray-500 text-sm leading-relaxed">
                {a.honoraires}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
