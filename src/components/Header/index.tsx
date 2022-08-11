import { MapPinLine, ShoppingCart } from 'phosphor-react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/Logo.svg'
import { useCart } from '../../hooks/useCartList'
import { HeaderButton, HeaderButtonContainer, HeaderContainer } from './styles'

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
            <HeaderButton variant="purple">
              <MapPinLine size={24} />
              São Paulo, SP
            </HeaderButton>
          </NavLink>
          <NavLink to={'/Checkout'}>
            <HeaderButton variant="yellow">
              {cartQuantity >= 1 && <span>{cartQuantity}</span>}
              <ShoppingCart size={24} />
            </HeaderButton>
          </NavLink>
        </HeaderButtonContainer>
      </div>
    </HeaderContainer>
  )
}

export default Header
