import styled from 'styled-components'

export const PaymentMethodContainer = styled.div`
  padding: 0 0.5rem;
  height: 3rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: ${({ theme }) => theme.colors['base-button']};
  color: ${({ theme }) => theme.colors['base-text']};
  border-radius: 1rem;
  gap: 0.5rem;
  text-transform: uppercase;
  border: 1px solid ${({ theme }) => theme.colors['base-button']};
  transition: 0.4s;
  cursor: pointer;
  user-select: none;

  &:hover {
    background: ${({ theme }) => theme.colors['base-hover']};
  }
`
