'use client';

import { useEffect, useState } from 'react';

export default function JoinDiscordButton() {
  const [link, setLink] = useState<string | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('/api/discord')
      .then(res => {
        if (!res.ok) throw new Error('Forbidden');
        return res.json();
      })
      .then(data => setLink(data.link))
      .catch(() => setError(true));
  }, []);

  if (error) return <p className="text-red-500">Accès non autorisé.</p>;

  return link ? (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-xl hover:bg-indigo-700 transition"
    >
      Rejoindre le Discord
    </a>
  ) : (
    <p className="text-gray-500">Chargement du lien…</p>
  );
}