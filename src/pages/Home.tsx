import Hero from '../components/Hero'
import About from '../components/About'
import Associes from '../components/Services'
import ContactForm from '../components/ContactForm'
import Header from '../components/Header'




export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />

      <div id="collaborateurs" className="pt-24">
        <Associes />
      </div>

      <div id="contact" className="pt-24">
        <ContactForm />
      </div>

      <span className="block mb-2 text-gray-700 text-center">Tous droits réservés</span>
    </>
  )
}