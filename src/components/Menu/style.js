import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Wrap = styled('div')`
  background-color: #fff;
  transition: all 0.5s ease-in-out;
  @media (max-width: 750px) {
    position: absolute;
    /* box-shadow: 0 0 20px rgba(0, 0, 0, 0.2); */
    transform: translateX(${(p) => (p.isOpened ? '0' : '-100%')});
  }
`

export const Hamburger = styled('div')`
  width: 30px;
  height: 30px;
  border-radius: 5px;
  background-color: #fff;
  display: none;
  position: absolute;
  right: -30px;
  top: 0;
  padding: 3px 0;
  div {
    height: 3px;
    border-radius: 10px;
    width: 22px;
    background-color: var(--accent);
    margin: 0 auto;
    position: relative;
    transform-origin: top left;
    transform: rotate(${(p) => (p.isOpened ? '45deg' : 0)});
    transition: all 0.2s ease-in-out;
    &:nth-child(2) {
      margin-top: 4px;
      opacity: ${(p) => (p.isOpened ? 0 : 1)};
    }
    &:last-child {
      margin-top: 4px;
      transform: rotate(${(p) => (p.isOpened ? '-45deg' : 0)});
      transform-origin: bottom left;
    }
  }
  @media (max-width: 750px) {
    display: block;
  }
`

export const Title = styled('div')`
  font-family: var(--bold);
  font-size: 24px;
  color: var(--accent);
  padding: 30px;
`

export const List = styled('div')`
  height: calc(90vh - 89px);
  overflow: auto;
  border-right: 1px solid #eaeaea;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${(p) => (p.loading === 'true' ? 'center' : 'flex-start')};
  img {
    width: 50px;
    margin: 0 auto;
  }
  @media (max-width: 750px) {
    height: calc(100vh - 89px);
  }
`

export const Item = styled(NavLink)`
  display: flex;
  padding: 10px 30px;
  color: #000;
  text-decoration: none;
  font-family: var(--semiBold);
  align-items: center;
  transition: all 0.2s ease-in-out;
  width: 100%;
  &:hover,
  &.active {
    background-color: var(--accent);
    color: #fff;
  }
`
