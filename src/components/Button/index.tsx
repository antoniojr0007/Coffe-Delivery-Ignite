import { ButtonHTMLAttributes, ReactNode } from 'react'
import { ButtonContainer } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string
  color?: string
  children?: ReactNode
}

export default function Button({
  title,
  color,
  children,
  ...rest
}: ButtonProps) {
  return (
    <ButtonContainer {...rest} variant={color}>
      {children}
      {title}
    </ButtonContainer>
  )
}
