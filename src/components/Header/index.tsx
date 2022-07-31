import { MapPinLine, ShoppingCart } from 'phosphor-react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/Logo.png'
import { HeaderButton, HeaderButtonContainer, HeaderContainer } from './styles'

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <div className="container">
        <img src={Logo} alt="Logo Coffee Delivery" />
        <HeaderButtonContainer>
          <NavLink to={'/'}>
            <HeaderButton variant="yellow">
              <MapPinLine size={24} />
              São Paulo, SP
            </HeaderButton>
          </NavLink>
          <NavLink to={'/confirmation'}>
            <HeaderButton variant="purple">
              <ShoppingCart size={24} />
            </HeaderButton>
          </NavLink>
        </HeaderButtonContainer>
      </div>
    </HeaderContainer>
  )
}

export default Header
