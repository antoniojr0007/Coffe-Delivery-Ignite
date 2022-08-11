import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import * as zod from 'zod'
import { CheckoutOrderForm } from './components/CheckoutOrderForm'
import { SelectedCoffees } from './components/SelectedCoffees'
import { CheckoutOrderContainer } from './styles'

const checkoutFormValidationSchema = zod.object({
  cep: zod.string().min(1, 'Digite um Cep Valido').max(9),
  streat: zod.string().min(1, 'Digite um endereço valido'),
  number: zod.string().min(1, 'Digite um numero valido'),
  complement: zod.string(),
  district: zod.string().min(1, 'Digite um bairro valido'),
  city: zod.string().min(1, 'Digite uma cidade valida'),
  state: zod.string().min(1, 'Digite um estado valido'),
})

export type Checkoutdata = zod.infer<typeof checkoutFormValidationSchema>

type ConfirmCheckoutFormData = Checkoutdata

export const Checkout: React.FC = () => {
  const checkoutForm = useForm({
    resolver: zodResolver(checkoutFormValidationSchema),
  })

  const { handleSubmit } = checkoutForm

  function handleConfirmCheckoutForm<ConfirmCheckoutFormData>(
    data: ConfirmCheckoutFormData,
  ) {
    console.log(data)
  }
  return (
    <FormProvider {...checkoutForm}>
      <CheckoutOrderContainer
        className="container"
        onSubmit={handleSubmit(handleConfirmCheckoutForm)}
      >
        <CheckoutOrderForm />
        <SelectedCoffees />
      </CheckoutOrderContainer>
    </FormProvider>
  )
}
