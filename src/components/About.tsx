const instagramPosts: string[] = [
  // Mets ici les liens des posts Instagram (publics)
  // Exemple :
  // "https://www.instagram.com/p/XXXXXXXXXXX/",
]

function getPostLabel(url: string) {
  try {
    const m = url.match(/instagram\.com\/p\/([^/]+)/i)
    if (m?.[1]) return `Post ${m[1]}`
  } catch {
    // ignore
  }
  return "Post Instagram"
}

export default function About() {
  const hasPosts = instagramPosts.length > 0

  return (
    <section id="about" className="bg-white text-black py-16 px-8 max-w-4xl mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-4">
        <span className="text-orange-600">À propos</span>
      </h2>

      <p className="text-lg text-gray-800 leading-relaxed">
        Auto-entrepreneur spécialisé dans le bien-être et la récupération, je propose des séances adaptées à vos besoins :
        massage détente, massage sportif, reboutement et soins énergétiques. Chaque rendez-vous est réalisé avec écoute,
        respect et personnalisation, pour vous aider à retrouver confort et équilibre.
      </p>

      {/* Instagram */}
      <div className="mt-12">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <h3 className="text-2xl font-semibold text-orange-700">Instagram</h3>

          {/* Remplace le lien par le vrai compte Instagram */}
          <a
            href="https://www.instagram.com/bisonblanc7/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-orange-600 hover:text-orange-700 underline visited:text-orange-600"
          >
            Voir le compte
          </a>
        </div>

        {!hasPosts ? (
          <p className="mt-4 text-sm text-gray-600 italic">
            Plus de poste viendrons par le future.
          </p>
        ) : (
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {instagramPosts.map((url, idx) => (
              <a
                key={idx}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-2xl bg-orange-50 border border-orange-100 p-6 hover:shadow-md transition visited:text-inherit"
              >
                <p className="font-semibold text-gray-800">{getPostLabel(url)}</p>
                <p className="mt-2 text-sm text-gray-600">Ouvrir sur Instagram</p>
                <p className="mt-3 text-xs text-gray-400 break-all">{url}</p>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
