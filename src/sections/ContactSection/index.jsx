import SeparateLine from '../../components/Separator'
import { Fade, Zoom } from 'react-awesome-reveal'

import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

import i18next from 'i18next'

import * as Styled from './styles'

export default function ContactSection() {
  return (
    <Styled.Container name="contact">
      <Styled.MainContainer>
        <Styled.PreviewContainer>
          <Fade triggerOnce>
            <Styled.H1>{i18next.t('contact.contact')}</Styled.H1>
            <SeparateLine />
            <Styled.Description>
              {i18next.t('contact.description')}
            </Styled.Description>
          </Fade>
        </Styled.PreviewContainer>
        <Zoom triggerOnce>
          <Styled.SocialLinksContainer>
            <Styled.Li>
              <a
                href="https://www.linkedin.com/in/lfernandor991/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
                <span>LinkedIn</span>
              </a>
            </Styled.Li>
            <Styled.Li>
              <a
                href="https://www.github.com/LuizFernando991"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
                <span>GitHub</span>
              </a>
            </Styled.Li>
            <Styled.Li>
              <a href="mailto:lfernando.r991@gmail.com">
                <HiOutlineMail />
                <span>Email</span>
              </a>
            </Styled.Li>
            <Styled.Li>
              <a href="/LuizFernando.pdf" target="_blank">
                <BsFillPersonLinesFill />
                <span>{i18next.t('asidelinks.resume')}</span>
              </a>
            </Styled.Li>
          </Styled.SocialLinksContainer>
        </Zoom>
      </Styled.MainContainer>
    </Styled.Container>
  )
}
