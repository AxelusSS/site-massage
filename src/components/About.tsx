export default function About() {
  return (
    <section id="about" className="bg-white text-black py-16 px-8 max-w-4xl mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-4">
        <span className="text-orange-600">À propos</span>
      </h2>

      <p className="text-lg text-gray-800 leading-relaxed">
        Auto-entrepreneur spécialisé dans le bien-être et la récupération, je propose des séances adaptées à vos besoins :
        massage détente, massage sportif, reboutement et soins énergétiques.
        Chaque rendez-vous est réalisé avec écoute, respect et personnalisation, pour vous aider à retrouver confort et équilibre.
      </p>

      {/* Instagram */}
      <div className="mt-12">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <h3 className="text-2xl font-semibold text-orange-700">Instagram</h3>

          {/* Remplace le lien par le vrai compte */}
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-orange-600 hover:text-orange-700 underline"
          >
            Voir le compte Instagram
          </a>
        </div>

        <p className="mt-2 text-gray-600 text-sm">
          Retrouvez des photos, infos et disponibilités directement sur Instagram.
        </p>

        {/* Zone pour embeds (Option A) */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-2xl bg-orange-50 border border-orange-100 p-5 text-gray-700">
            <p className="font-semibold mb-2">Post Instagram</p>
            <p className="text-sm text-gray-600">
              Colle ici un embed Instagram (post public).  
              Je peux aussi te brancher un feed automatique via l’API si tu veux.
            </p>
          </div>

          <div className="rounded-2xl bg-orange-50 border border-orange-100 p-5" />
          <div className="rounded-2xl bg-orange-50 border border-orange-100 p-5" />
        </div>
      </div>
    </section>
  )
}
