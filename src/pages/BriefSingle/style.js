import styled from 'styled-components'

export const Wrap = styled('div')`
  padding: 30px;
  max-height: 90vh;
  overflow: auto;
  @media (max-width: 750px) {
    max-height: 100vh;
  }
`

export const Image = styled('img')`
  width: 100%;
  border-radius: 20px;
  margin: 15px 0;
`

export const Title = styled('div')`
  font-size: 24px;
  font-family: var(--bold);
  color: #000;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Description = styled('div')`
  font-family: var(--reg);
  font-size: 14px;
  color: grey;
  margin-bottom: 25px;
`

export const Row = styled('div')`
  display: flex;
  align-items: center;
  font-family: var(--semiBold);
`
export const LabelS = styled('div')`
  font-family: var(--semiBold);
  font-size: 16px;
  color: #000;
  display: flex;
  align-items: center;
  margin-right: 5px;
  img {
    width: 15px;
    margin-right: 5px;
  }
`
