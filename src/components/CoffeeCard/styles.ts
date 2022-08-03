import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  width: 16rem;
  height: 19.375rem;
  border: 1px solid transparent;
  border-radius: 0.375rem 2.25rem 0.375rem 2.25rem;
  background: ${(props) => props.theme.colors['base-card']};
`
export const CardImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -1.25rem;
`
export const CardTags = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.25rem;
  margin-bottom: 1rem;
`
export const CardTagItem = styled.div`
  width: 5rem;
  height: 1.375rem;
  border-radius: 1rem;
  margin: 0.25rem;
  background: ${(props) => props.theme.colors['brand-yellow-light']};
  text-align: center;
`
export const CardTagSpan = styled.span`
  text-transform: uppercase;
  font-size: ${(props) => props.theme.textSizes['components-tag']};
  color: ${(props) => props.theme.colors['brand-yellow-dark']};
  font-weight: bold;
`
export const CardTitle = styled.h1`
  font-family: ${(props) => props.theme.fonts.title};
  font-weight: bold;
  font-size: ${(props) => props.theme.textSizes['title-title-l']};
  line-height: 130%;
  text-align: center;
  color: ${(props) => props.theme.colors['base-subtitle']};
`
export const CardDescription = styled.p`
  font-family: ${(props) => props.theme.fonts.regular};
  font-weight: regular;
  font-size: ${(props) => props.theme.textSizes['text-regular-s']};
  line-height: 130%;
  text-align: center;
  color: ${(props) => props.theme.colors['base-label']};
`
export const CardShipping = styled.div`
  width: 100%;
  //max-width: 16rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0;
  margin-top: 2rem;
  gap: 2rem;
  position: absolute;
  //margin-left: -0.5rem;
`
export const CardShippingPrice = styled.div`
  width: 4rem;
  height: 2rem;
  margin-left: 0.5rem;

  span {
    font-size: ${(props) => props.theme.textSizes['text-regular-m']};
    font-family: ${(props) => props.theme.fonts.regular};
    font-weight: 800;
    line-height: 2rem;
  }

  strong {
    font-size: ${(props) => props.theme.textSizes['title-title-l']};
    font-family: ${(props) => props.theme.fonts.title};
    font-weight: 400;
    line-height: 1.1375rem;
  }
`
export const CardShippingQtda = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.5rem;
  gap: 0.5rem;
  background: ${(props) => props.theme.colors['base-button']};
  width: 7rem;
  height: 2rem;
  margin-left: -2rem;
`
export const CardShippingQtdaSpan = styled.span`
  font-size: ${(props) => props.theme.textSizes['title-title-l']};
  font-family: ${(props) => props.theme.fonts.regular};
`
export const CardShippingCar = styled.div`
  width: 2rem;
  height: 2rem;
`
