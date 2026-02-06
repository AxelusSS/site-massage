import Hero from '../components/Hero'
import Doc from '../components/Doc'
import ContactForm from '../components/ContactForm'
import Header from '../components/Header'

import TrustedBy from '../components/TrustBy'


export default function Docs() {
  return (
    <>
      <Header />
      <Hero />
      
      <Doc />

      <TrustedBy />

      <div id="contact" className="pt-24">
        <ContactForm />
      </div>

      <span className="block mb-2 text-gray-700 text-center">Tous droits réservés</span>
    </>
  )
}