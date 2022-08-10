import { MapPinLine, ShoppingCart } from 'phosphor-react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/Logo.svg'
import { useCart } from '../../hooks/useCartList'
import Button from '../Button'
import { HeaderButtonContainer, HeaderContainer } from './styles'

const Header: React.FC = () => {
  const { cartQuantity } = useCart()
  return (
    <HeaderContainer>
      <div className="container">
        <NavLink to={'/'}>
          <img src={Logo} alt="Logo Coffee Delivery" />
        </NavLink>
        <HeaderButtonContainer>
          <NavLink to={'/'}>
            <Button color="base-purple-light" title="São Paulo, SP">
              <MapPinLine size={24} />
            </Button>
          </NavLink>
          <NavLink to={'/Checkout'}>
            <Button color="base-yellow-light">
              {cartQuantity >= 1 && <span>{cartQuantity}</span>}
              <ShoppingCart size={24} />
            </Button>
          </NavLink>
        </HeaderButtonContainer>
      </div>
    </HeaderContainer>
  )
}

export default Header
