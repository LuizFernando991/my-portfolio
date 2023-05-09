import { useState } from 'react'
import { Link, animateScroll } from 'react-scroll'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useTransition } from 'react-spring'

import ThemeSwitch from '../ThemeSwitch'
import profileImage from '../../assets/NoBgProfile.png'

import i18next from 'i18next'
import * as Styled from './styles'

function Header({ darkmode, setDarkMode }) {
  const [openMenu, setOpenMenu] = useState(false)

  const transition = useTransition(openMenu, {
    from: { transform: 'translate3d(-100%, 0%, 0)' },
    enter: { transform: 'translate3d(0%, 0%, 0)' },
    leave: { transform: 'translate3d(-100%, 0%, 0)' }
  })

  return (
    <Styled.Container>
      {transition(
        (style, item) =>
          item && (
            <Styled.DropDownMenu style={style}>
              {openMenu && (
                <>
                  <Styled.Li>
                    <Link
                      onClick={() => {
                        setOpenMenu(false)
                        animateScroll.scrollToTop()
                      }}
                      to="Home"
                      smooth
                      duration={200}
                      style={{ cursor: 'pointer' }}
                    >
                      {i18next.t('navbar.home')}
                    </Link>
                  </Styled.Li>
                  <Styled.Li>
                    <Link
                      onClick={() => setOpenMenu(false)}
                      to={'about'}
                      smooth
                      duration={200}
                      offset={-40}
                      style={{ cursor: 'pointer' }}
                    >
                      {i18next.t('navbar.about')}
                    </Link>
                  </Styled.Li>
                  <Styled.Li>
                    <Link
                      onClick={() => setOpenMenu(false)}
                      to={'projects'}
                      smooth
                      duration={200}
                      offset={-140}
                      style={{ cursor: 'pointer' }}
                    >
                      {i18next.t('navbar.projects')}
                    </Link>
                  </Styled.Li>
                  <Styled.Li>
                    <Link
                      onClick={() => setOpenMenu(false)}
                      to={'contact'}
                      smooth
                      duration={200}
                      offset={-60}
                      style={{ cursor: 'pointer' }}
                    >
                      {i18next.t('navbar.contact')}
                    </Link>
                  </Styled.Li>
                </>
              )}
            </Styled.DropDownMenu>
          )
      )}
      <Styled.ContainerContent>
        <Styled.LogoContainer>
          <Styled.LogoImageContainer>
            <Styled.LogoImage src={profileImage} />
          </Styled.LogoImageContainer>
          <Styled.Logo>{'<Luiz Fernando/>'}</Styled.Logo>
        </Styled.LogoContainer>
        <Styled.NavBarContainer>
          <Styled.NavBar>
            <Styled.MenuOptions>
              <Styled.Li>
                <Styled.ALink
                  onClick={() => animateScroll.scrollToTop()}
                  to="Home"
                  smooth
                  duration={200}
                >
                  {i18next.t('navbar.home')}
                </Styled.ALink>
              </Styled.Li>
              <Styled.Li>
                <Styled.ALink to={'about'} smooth duration={200} offset={-40}>
                  {i18next.t('navbar.about')}
                </Styled.ALink>
              </Styled.Li>
              <Styled.Li>
                <Styled.ALink
                  to={'projects'}
                  smooth
                  duration={200}
                  offset={-140}
                >
                  {i18next.t('navbar.projects')}
                </Styled.ALink>
              </Styled.Li>
              <Styled.Li>
                <Styled.ALink
                  to={'contact'}
                  smooth
                  duration={200}
                  offset={-100}
                >
                  {i18next.t('navbar.contact')}
                </Styled.ALink>
              </Styled.Li>
            </Styled.MenuOptions>
          </Styled.NavBar>
          <ThemeSwitch state={darkmode} setState={setDarkMode} />
          <Styled.HamburgerMenu onClick={() => setOpenMenu(!openMenu)}>
            {openMenu ? <FaTimes /> : <FaBars />}
          </Styled.HamburgerMenu>
        </Styled.NavBarContainer>
      </Styled.ContainerContent>
    </Styled.Container>
  )
}

export default Header
