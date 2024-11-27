import { useState } from 'react'
import Header from './src/components/Header'
import Hero from './src/components/Hero'
import Gallery from './src/components/Gallery'
import Complements from './src/components/Complements'
import ContactUs from './src/components/ContactUs'
import Footer from './src/components/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Hero />
      <Gallery />
      <Complements />
      <ContactUs />
      <Footer />
    </>
  )
}

export default App
