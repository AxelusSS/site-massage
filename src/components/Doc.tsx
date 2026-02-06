export default function Docs() {
  return (
    <section className="bg-white text-black py-16 px-8 max-w-4xl mx-auto mt-20">
      <h2 className="text-3xl font-bold mb-4">Documentation du projet</h2>

      <p>🍕 <strong>JP Pizza – Pizzeria</strong></p>
      <p>"Un vrai chawarma, ça ne se mange pas. Ça se respecte."</p>

      <h3 className="text-2xl font-semibold mt-8 mb-3">🔥 Qui sommes-nous ?</h3>
      <p>
        JP Pizza, c’est une pizzeria simple, efficace et respectée à Los Santos.
        Ici, on sert des classiques bien faits, chauds, et sans compromis.
      </p>
      <p>
        Sur place ou à emporter.<br />
        Paiement en cash ou en carte.<br />
        Maintenant ou tout de suite.<br />
        Tu commandes, tu manges, tu reviens.
      </p>

      <h3 className="text-2xl font-semibold mt-8 mb-3">🥙 Notre concept</h3>
      <p>
        Une carte courte, des recettes maîtrisées, et un service rapide.
        Menus complets (pizza + boisson + dessert) ou commande à l’unité.
      </p>
      <p>
        Chaque pizza est préparé avec soin, servi chaud,
        et pensé pour te caler le ventre autant que l’esprit.
      </p>

      <h3 className="text-2xl font-semibold mt-8 mb-3">🏢 Offres Professionnelles</h3>
      <p>
        JP Pizza soutient les structures publiques et privées
        avec une offre dédiée aux professionnels.
      </p>

      <table className="table-auto w-full text-left mb-6">
        <thead>
          <tr>
            <th className="border px-2 py-1">Avantage</th>
            <th className="border px-2 py-1">Détail</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-2 py-1">Réduction</td>
            <td className="border px-2 py-1">-20 % sur les menus</td>
          </tr>
          <tr>
            <td className="border px-2 py-1">Livraison</td>
            <td className="border px-2 py-1">Gratuite</td>
          </tr>
          <tr>
            <td className="border px-2 py-1">Commandes</td>
            <td className="border px-2 py-1">Prioritaires</td>
          </tr>
        </tbody>
      </table>

      <h3 className="text-2xl font-semibold mt-8 mb-3">👨‍🍳 Le Maître Kébabier</h3>
      <article className="mb-6">
        <h4 className="font-semibold text-lg mb-1">José Pamplemouse</h4>
        <p>
          Véritable légende de la pizza, José a formé de nombreux maîtres
          pizzaiolo à travers l’Europe.
        </p>
        <p>
          Après avoir bâti sa réputation et multiplié les établissements,
          il est aujourd’hui convaincu d’une chose :
          imposer le vrai goût de la pizza en Amérique.
        </p>
      </article>

      <h3 className="text-2xl font-semibold mt-8 mb-3">📜 La Carte</h3>
      <p>
        Nous proposons plusieurs produits disponibles à l’unité
        ou en menu avec un prix préférentiel.
      </p>
      <p>
        Pizza, Calzone, boissons fraîches, desserts… tout est pensé pour un repaschaud, rapide et convivial.
      </p>

      {/* ✅ Section Canva */}
      <h3 className="text-2xl font-semibold mt-8 mb-3">🎨 Support visuel & présentation</h3>
      <p>
        La présentation officielle du projet (concept, carte et identité visuelle)
        est disponible via le lien Canva ci-dessous :
      </p>
      <a
        href="https://www.canva.com/design/DAHAMaCRFJY/8D-c8ZjFOtccJMle2qW36A/edit?utm_content=DAHAMaCRFJY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-3 font-semibold text-blue-600 hover:underline"
      >
        👉 Accéder à la présentation Canva
      </a>

      <h3 className="text-2xl font-semibold mt-8 mb-3">📍 Informations complémentaires</h3>
      <p>
        L’équipe JP Pizza reste disponible pour toute demande, partenariat ou commande spécifique.
      </p>
      <p className="font-semibold mt-2">Merci et bon appétit.</p>
    </section>
  )
}
