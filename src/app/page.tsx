import './globals.css'

import Header from '@/components/Header/Header'
import About from '@/components/About/About'
import Interests from '@/components/Interests/Interests'
import ContactForm from '@/components/ContactForm/ContactForm'
import Footer from '@/components/Footer/Footer'

export default function Component() {
  return (
    <div className='container'>
      <Header />
      <main className='main'>
        <div className='content'>
          <About />
          <Interests />
          <ContactForm />
          <Footer />
        </div>
      </main>
    </div>
  )
}
