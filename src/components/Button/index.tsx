import { ButtonHTMLAttributes, ReactNode } from 'react'
import { ButtonContainer } from './styles'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string
  color?: string
  children?: ReactNode
}

export default function Button({ title, color, children, ...rest }: Props) {
  return (
    <ButtonContainer {...rest} variant={color}>
      {title}
      {children}
    </ButtonContainer>
  )
}
