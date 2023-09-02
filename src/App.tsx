import React from 'react'
import Header from './Component/Header'
import Hero from './Component/Hero'
import Work from './Component/Work'
import Join from './Component/Join'
import GlobalStyles from './Component/GlobalStyles'
import Team from './Component/Team'


const App:React.FC = () => {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <Hero />
      <Work />
      <Join />
      <Team/>
      
      {/* <ProductDrop /> */}
      {/* <Resources /> */}
    </div>
  )
}

export default App