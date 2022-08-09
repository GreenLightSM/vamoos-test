import styled from 'styled-components'

export const Title = styled('div')`
  font-family: var(--bold);
  font-size: 32px;
  color: ${(p) => (p.notFound ? 'red' : '#eaeaea')};
`

export const Wrap = styled('div')`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
