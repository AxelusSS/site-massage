import Hero from '../components/Hero'

import ContactForm from '../components/ContactForm'
import Header from '../components/Header'




export default function Docs() {
  return (
    <>
      <Header />
      <Hero />
      

      <div id="contact" className="pt-24">
        <ContactForm />
      </div>

      <span className="block mb-2 text-gray-700 text-center">Tous droits réservés</span>
    </>
  )
}