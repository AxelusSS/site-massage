import Hero from '../components/Hero'
import About from '../components/About'
import Associes from '../components/Associes'
import ContactForm from '../components/ContactForm'
import Header from '../components/Header'
import NosOffres from '../components/NosOffres'
import TrustedBy from '../components/TrustBy'


export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />

      <div id="collaborateurs" className="pt-24">
        <Associes />
      </div>

      <div id="tarifs" className="pt-24">
        <NosOffres />
      </div>

      <TrustedBy />

      <div id="contact" className="pt-24">
        <ContactForm />
      </div>

      <span className="block mb-2 text-gray-700 text-center">Tous droits réservés</span>
    </>
  )
}