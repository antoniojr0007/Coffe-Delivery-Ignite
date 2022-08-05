import React from 'react'
import { IconContainer, InfoWhithIconContainer } from './styles'

interface InfoWhithIconProps {
  icon: React.ReactNode
  text: string | React.ReactNode
  color: string
}

export function InfoWhithIcon({ icon, text, color }: InfoWhithIconProps) {
  return (
    <InfoWhithIconContainer>
      <IconContainer color={color}>{icon}</IconContainer>
      {typeof text === 'string' ? <p>{text}</p> : text}
    </InfoWhithIconContainer>
  )
}
