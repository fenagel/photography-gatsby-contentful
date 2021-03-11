import { Link } from "gatsby"
import styled from "styled-components"
import { FaBars } from "react-icons/fa"

export const Nav = styled.nav`
  background: var(--color-base);
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  z-index: 10;

  @media screen and (max-width: 768px) {
    padding: 0.3rem;
  }
`

export const NavLink = styled(Link)`
  color: var(--color-accent);
  font-size: 2rem;
  font-family: var(--font-display);
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: var(--color-secondary);
  }
  &:hover {
    color: var(--color-accent);
  }
`

export const Bars = styled(FaBars)`
  display: none;
  color: var(--color-secondary);
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 3rem;
    cursor: pointer;
  }
`

export const NavMenu = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
