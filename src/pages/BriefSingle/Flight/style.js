import styled from 'styled-components'

export const Grid = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr 100px;
  margin: 15px 0;
  align-items: center;
  gap: 25px;
  border-bottom: 1px solid #eaeaea;
  padding: 5px 0;
`

export const Text = styled('div')`
  font-family: var(--med);
  font-size: 16px;
  color: #000;
`
