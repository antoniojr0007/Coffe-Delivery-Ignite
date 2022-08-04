import styled from 'styled-components'
import { Props } from './TextProps'

export const TitleText = styled.h1<Props>`
  color: ${({ theme, color }) => theme.colors[`base-${color ?? 'title'}`]};
  font-family: ${({ theme, ff }) => theme.fonts[`${ff ?? 'title'}`]};
  font-size: ${({ theme, fs }) => theme.sizes[`${fs ?? 48}`]};
  font-weight: ${({ theme, fw }) => theme.lineWeight[`${fw ?? 'eb'}`]};
  line-height: ${({ theme, lh }) => theme.lineHeight[`${lh ?? 'bold'}`]};
`

export const SubTitleText = styled.h2<Props>`
  color: ${({ theme, color }) => theme.colors[`base-${color ?? 'title'}`]};
  font-family: ${({ theme, ff }) => theme.fonts[`${ff ?? 'title'}`]};
  font-size: ${({ theme, fs }) => theme.sizes[`${fs ?? 32}`]};
  font-weight: ${({ theme, fw }) => theme.lineWeight[`${fw ?? 'b'}`]};
  line-height: ${({ theme, lh }) => theme.lineHeight[`${lh ?? 'bold'}`]};
`

export const Text = styled.p<Props>`
  color: ${({ theme, color }) => theme.colors[`base-${color ?? 'text'}`]};
  font-family: ${({ theme, ff }) => theme.fonts[`${ff ?? 'regular'}`]};
  font-size: ${({ theme, fs }) => theme.sizes[`${fs ?? 20}`]};
  font-weight: ${({ theme, fw }) => theme.lineWeight[`${fw ?? 'r'}`]};
  line-height: ${({ theme, lh }) => theme.lineHeight[`${lh ?? 'regular'}`]};
`
