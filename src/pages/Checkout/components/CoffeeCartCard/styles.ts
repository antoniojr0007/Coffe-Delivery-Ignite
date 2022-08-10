import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors['base-button']};
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
  > p {
    align-self: flex-start;
  }
`

export const CoffeeCardImage = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;

  img {
    width: 4rem;
    height: 4rem;
  }
`

export const CoffeeCardInfo = styled.div``

export const ActionContainer = styled.div`
  margin-top: 0.5rem;
  height: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  > div {
    max-width: 4.5rem;
    height: 100%;
  }
`

export const ButtonRemover = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: ${({ theme }) => theme.colors['base-text']};
  font-size: 0.75rem;
  height: 100%;
  border: none;
  background: ${({ theme }) => theme.colors['base-button']};
  padding: 0.5rem;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: 0.4s;

  &:hover {
    background: ${({ theme }) => theme.colors['base-hover']};
  }
`
