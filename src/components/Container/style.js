import styled from 'styled-components'

export const Wrap = styled('div')`
  width: 900px;
  height: 90vh;
  border-radius: 20px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  margin: 5vh auto 0 auto;
  display: grid;
  grid-template-columns: 200px 1fr;
  @media (max-width: 900px) {
    width: 95%;
  }
  @media (max-width: 750px) {
    display: block;
    width: 100%;
    height: 100vh;
    margin: 0;
    border-radius: 0;
  }
`
