import styled from 'styled-components'

interface IconContainerProps {
  color: string
}

export const InfoWhithIconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`
export const IconContainer = styled.div<IconContainerProps>`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: ${({ color }) => color};
  color: ${({ theme }) => theme.colors['base-white']};
  display: flex;
  justify-content: center;
  align-items: center;
`
