const instagramPosts: string[] = [
  // Mets ici les liens des posts
  // "https://www.instagram.com/p/XXXXXXXXXXX/",
  // "https://www.instagram.com/p/YYYYYYYYYYY/",
]

function getPostLabel(url: string) {
  // petit label propre: "Post Instagram"
  // (option: extraire l'id /p/xxx)
  try {
    const m = url.match(/instagram\.com\/p\/([^/]+)/i)
    if (m?.[1]) return `Post ${m[1]}`
  } catch {}
  return "Post Instagram"
}

export function InstagramList() {
  const hasPosts = instagramPosts.length > 0

  return (
    <div className="mt-12">
      <div className="flex items-end justify-between gap-4 flex-wrap">
        <h3 className="text-2xl font-semibold text-orange-700">Instagram</h3>

        {/* Mets ici le lien du compte */}
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
        <div className="mt-6 rounded-2xl bg-orange-50 border border-orange-100 p-6 text-gray-700">
          Plus de posts viendront par le futur.
        </div>
      ) : (
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {instagramPosts.map((url, idx) => (
            <a
              key={idx}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl bg-white border border-orange-100 p-6 shadow-sm hover:shadow-md transition"
            >
              <p className="font-semibold text-gray-800">{getPostLabel(url)}</p>
              <p className="mt-2 text-sm text-gray-600">
                Ouvrir sur Instagram
              </p>
              <p className="mt-3 text-xs text-gray-400 break-all">
                {url}
              </p>
            </a>
          ))}
        </div>
      )}
    </div>
  )
}
