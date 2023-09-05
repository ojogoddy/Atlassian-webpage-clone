import React from 'react'
import Header from './Component/Header'
import Hero from './Component/Hero'
import Work from './Component/Work'
import Join from './Component/Join'
import GlobalStyles from './Component/GlobalStyles'
import Team from './Component/Team'
import { Careers } from './Component/Career'
import { Footer } from './Component/Footer'
import { Foot } from './Component/Foot'


const App:React.FC = () => {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <Hero />
      <Work />
      <Join />
      <Team/>
      <Careers />
      <Footer />
      <Foot />

    </div>
  )
}

export default App