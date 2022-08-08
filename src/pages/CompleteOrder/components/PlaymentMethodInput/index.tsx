import { ReactNode } from 'react'
import { Text } from '../../../../components/Typography'
import { PaymentMethodContainer } from './styles'

interface PaymentProps {
  icon: ReactNode
  title: string
}

export function PaymentMethodInput({ icon, title }: PaymentProps) {
  return (
    <PaymentMethodContainer>
      {icon}
      <Text fs={12} color="text" fw="b" lh="regular">
        {title}
      </Text>
    </PaymentMethodContainer>
  )
}
