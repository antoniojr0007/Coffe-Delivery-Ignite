import React from 'react'
import { CheckoutOrderForm } from './components/CheckoutOrderForm'
import { SelectedCoffees } from './components/SelectedCoffees'
import { CheckoutOrderContainer } from './styles'

export const Checkout: React.FC = () => {
  return (
    <CheckoutOrderContainer className="container">
      <CheckoutOrderForm />
      <SelectedCoffees />
    </CheckoutOrderContainer>
  )
}
