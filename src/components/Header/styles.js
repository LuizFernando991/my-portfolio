import styled from 'styled-components'
import { Link } from 'react-scroll'
import { animated } from 'react-spring'

export const Container = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
  background-color: var(--bg-secondary-color);
  box-shadow: 0 10px 50px
    ${(props) =>
      props.theme.title === 'light'
        ? 'rgba(0,0,0,.1)'
        : 'rgba(255,255,255,.12)'};
`

export const ContainerContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 6rem;
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  transition: color 0.3s;
  z-index: 10;
`

export const HamburgerMenu = styled.div`
  display: none;
  color: var(--color-primary);
  font-size: 25px;
  z-index: 3;
  @media (max-width: 940px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 2rem;
  }
`

export const LogoImageContainer = styled.div`
  width: 5.5rem;
  height: 5.5rem;
  border-radius: 50px;
  overflow: hidden;
  margin-right: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-secondary);
`

export const LogoImage = styled.img`
  width: 6.5rem;
  object-fit: cover;
  -o-object-position: center;
  object-position: center;
  display: block;
  box-shadow: 0 10px 100px rgba(0, 0, 0, 0.1);
`

export const Logo = styled.span`
  font-size: 1.9rem;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 1px;
`

export const NavBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const NavBar = styled.nav`
  margin-right: 2rem;
`

export const ALink = styled(Link)`
  cursor: pointer;
  &:hover {
    color: var(--color-secondary);
  }
`

export const MenuOptions = styled.ul`
  display: flex;

  @media (max-width: 940px) {
    display: none;
  }
`

export const Li = styled.li`
  list-style: none;
  font-size: 1.6rem;
  letter-spacing: 1px;
  font-weight: 700;
  padding: 2rem;
  width: 12rem;
  text-transform: uppercase;
  transition: color 0.3s;
`

export const DropDownMenu = styled(animated.ul)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  transform-origin: top left;
  background-color: var(--bg-grey-color);
  z-index: 2;

  li {
    font-size: 2rem;
    width: 90%;
    text-align: center;
    padding: 2rem;
  }

  li:not(:last-child) {
    margin-bottom: 1rem;
  }

  @media (min-width: 940px) {
    display: none;
  }
`
