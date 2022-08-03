import { MapPinLine, ShoppingCart } from 'phosphor-react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/Logo.png'
import Button from '../Button'
import { HeaderButtonContainer, HeaderContainer } from './styles'

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <div className="container">
        <img src={Logo} alt="Logo Coffee Delivery" />
        <HeaderButtonContainer>
          <NavLink to={'/'}>
            <Button color="brand-purple-light" title="São Paulo, SP">
              <MapPinLine size={24} />
            </Button>
          </NavLink>
          <NavLink to={'/confirmation'}>
            <Button color="brand-yellow-light">
              <ShoppingCart size={24} />
            </Button>
          </NavLink>
        </HeaderButtonContainer>
      </div>
    </HeaderContainer>
  )
}

export default Header
