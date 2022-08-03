import React from 'react'
import CoffeeCard from '../../components/CoffeeCard'
import Intro from './components/Intro'

import { HomeCardsContainer, HomeCardsTitle, HomeContainer } from './styles'

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <div className="container">
        <Intro />
        <HomeCardsTitle>Nossos cafés</HomeCardsTitle>
        <HomeCardsContainer>
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
        </HomeCardsContainer>
      </div>
    </HomeContainer>
  )
}

export default Home
