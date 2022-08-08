import styled from 'styled-components'

export const InputContainer = styled.input`
  height: 3rem;
  border-radius: 1rem;
  border: 1px solid ${({ theme }) => theme.colors['base-button']};
  background: ${({ theme }) => theme.colors['base-input']};
  transition: 0.4s;

  color: ${({ theme }) => theme.colors['base-text']};
  font-size: ${({ theme }) => theme.sizes[12]};
  padding: 0 0.75rem;

  &:hover {
    color: ${({ theme }) => theme.colors['base-label']};
  }

  &::focus {
    border-color: ${({ theme }) => theme.colors['base-yellow-dark']};
  }
`
