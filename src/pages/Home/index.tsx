import React from 'react'
import Intro from './components/Intro'
import { OurCoffees } from './components/OurCoffees'

import { HomeContainer } from './styles'

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <div className="container">
        <Intro />
        <OurCoffees title="Nossos cafés" />
      </div>
    </HomeContainer>
  )
}

export default Home
