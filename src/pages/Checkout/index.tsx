import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import * as zod from 'zod'
import { useCart } from '../../hooks/useCartList'
import { CheckoutOrderForm } from './components/CheckoutOrderForm'
import { SelectedCoffees } from './components/SelectedCoffees'
import { CheckoutOrderContainer } from './styles'

enum PaymentMethods {
  credit = 'credit',
  debit = 'debit',
  money = 'money',
}

const confirmCheckoutFormValidationSchema = zod.object({
  cep: zod.string().min(1, 'Informe o CEP'),
  street: zod.string().min(1, 'Informe o Rua'),
  number: zod.string().min(1, 'Informe o Número'),
  complement: zod.string(),
  district: zod.string().min(1, 'Informe o Bairro'),
  city: zod.string().min(1, 'Informe a Cidade'),
  uf: zod.string().min(1, 'Informe a UF'),
  paymentMethod: zod.nativeEnum(PaymentMethods, {
    errorMap: () => {
      return { message: 'Informe o método de pagamento' }
    },
  }),
})

export type CheckoutData = zod.infer<typeof confirmCheckoutFormValidationSchema>

type ConfirmCheckoutFormData = CheckoutData

export function Checkout() {
  const checkoutForm = useForm<ConfirmCheckoutFormData>({
    resolver: zodResolver(confirmCheckoutFormValidationSchema),
    defaultValues: {
      paymentMethod: undefined,
    },
  })

  const { handleSubmit } = checkoutForm

  const navigate = useNavigate()
  const { cleanCart } = useCart()

  function handleConfirmCheckout(data: ConfirmCheckoutFormData) {
    navigate('/Success', {
      state: data,
    })
    cleanCart()
  }
  return (
    <FormProvider {...checkoutForm}>
      <CheckoutOrderContainer
        className="container"
        onSubmit={handleSubmit(handleConfirmCheckout)}
      >
        <CheckoutOrderForm />
        <SelectedCoffees />
      </CheckoutOrderContainer>
    </FormProvider>
  )
}
