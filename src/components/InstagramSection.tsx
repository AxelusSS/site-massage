export default function InstagramSection() {
  return (
    <div className="mt-10">
      <h3 className="text-2xl font-semibold mb-4 text-orange-700">Instagram</h3>

      {/* OPTION A : tu remplaces par des embeds de posts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="rounded-2xl bg-orange-50 border border-orange-100 p-6 text-gray-700">
          Ajoute ici un embed Instagram (post public) ou branche l’API pour un feed auto.
        </div>
        <div className="rounded-2xl bg-orange-50 border border-orange-100 p-6 text-gray-700" />
        <div className="rounded-2xl bg-orange-50 border border-orange-100 p-6 text-gray-700" />
      </div>
    </div>
  )
}
