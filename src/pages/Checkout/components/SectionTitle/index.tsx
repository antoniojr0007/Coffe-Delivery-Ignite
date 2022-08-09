import { ReactNode } from 'react'
import { Text } from '../../../../components/Typography'
import { SectionTitleContainer, TitleAndSubtitleContainer } from './styles'

interface SectionTitleProps {
  title: string
  subtitle: string
  icon: ReactNode
}

export function SectionTitle({ title, subtitle, icon }: SectionTitleProps) {
  return (
    <SectionTitleContainer>
      {icon}
      <TitleAndSubtitleContainer>
        <Text fw="sb" color="subtitle">
          {title}
        </Text>
        <Text fs={14} color="subtitle">
          {subtitle}
        </Text>
      </TitleAndSubtitleContainer>
    </SectionTitleContainer>
  )
}
