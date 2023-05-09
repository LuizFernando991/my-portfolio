import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

import i18next from 'i18next'

import * as Styled from './styles'

export default function SocialLinks() {
  return (
    <Styled.Container>
      <ul>
        <Styled.Li>
          <a
            href="https://www.linkedin.com/in/lfernandor991/"
            target="_blank"
            rel="noreferrer"
          >
            <span>LinkedIn</span> <FaLinkedin />{' '}
          </a>
        </Styled.Li>
        <Styled.Li>
          <a
            href="https://www.github.com/LuizFernando991"
            target="_blank"
            rel="noreferrer"
          >
            <span>GitHub</span> <FaGithub />{' '}
          </a>
        </Styled.Li>
        <Styled.Li>
          <a href="mailto:lfernando.r991@gmail.com">
            <span>Email</span> <HiOutlineMail />{' '}
          </a>
        </Styled.Li>
        <Styled.Li>
          <a href="/LuizFernando.pdf" target="_blank">
            <span>{i18next.t('asidelinks.resume')}</span>{' '}
            <BsFillPersonLinesFill />{' '}
          </a>
        </Styled.Li>
      </ul>
    </Styled.Container>
  )
}
