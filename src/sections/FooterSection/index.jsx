import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

import i18next from 'i18next'

import * as Styled from './styles'

export default function FooterSection() {
  return (
    <Styled.Container>
      <Styled.ContentContainer>
        <Styled.AboutMe>
          <Styled.H2>Luiz Fernando</Styled.H2>
          <Styled.AboutMeDescription>
            {i18next.t('footer.description')}
          </Styled.AboutMeDescription>
        </Styled.AboutMe>
        <Styled.Socials>
          <Styled.H2>{i18next.t('footer.socials')}</Styled.H2>
          <Styled.Links>
            <Styled.Link
              href="https://www.linkedin.com/in/lfernandor991/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </Styled.Link>
            <Styled.Link
              href="https://www.github.com/LuizFernando991"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </Styled.Link>
            <Styled.Link href="mailto:lfernando.r991@gmail.com">
              <HiOutlineMail />
            </Styled.Link>
            <Styled.Link href="/LuizFernando.pdf" target="_blank">
              <BsFillPersonLinesFill />
            </Styled.Link>
          </Styled.Links>
        </Styled.Socials>
      </Styled.ContentContainer>
    </Styled.Container>
  )
}
