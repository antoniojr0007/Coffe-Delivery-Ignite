import React from 'react'
import Intro from './components/Intro'

import { HomeCardsContainer, HomeCardsTitle, HomeContainer } from './styles'

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <Intro />
      <div className="container">
        <HomeCardsContainer>
          <HomeCardsTitle>Nossos cafés</HomeCardsTitle>
        </HomeCardsContainer>
      </div>
    </HomeContainer>
  )
}

export default Home
