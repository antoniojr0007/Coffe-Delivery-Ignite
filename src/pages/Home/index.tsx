import React from 'react'
import { OurCoffees } from './components/OurCoffees'

import { HomeContainer } from './styles'

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <div className="container">
        <OurCoffees title="Nossos cafés" />
      </div>
    </HomeContainer>
  )
}

// <Intro />
export default Home
