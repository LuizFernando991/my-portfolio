import SeparateLine from '../../components/Separator'
import Skills from '../../components/Skills'
import { Fade, Slide } from 'react-awesome-reveal'

import i18next from 'i18next'

import * as Styled from './styles'

export default function AboutSection() {
  return (
    <Styled.Container name="about">
      <Styled.MainContainer>
        <Styled.AboutPreviewContainer>
          <Fade triggerOnce>
            <Styled.H1>{i18next.t('about.AboutMe')}</Styled.H1>
            <SeparateLine />
            <Styled.AboutPreview>
              {i18next.t('about.AboutMeResume')}
            </Styled.AboutPreview>
          </Fade>
        </Styled.AboutPreviewContainer>
        <Styled.AboutAndSkillsContainer>
          <Slide direction="left" triggerOnce>
            <Styled.About>
              <Styled.H2>
                {i18next.t('about.AboutMeDescriptionTitle')}
              </Styled.H2>
              <Styled.P>{i18next.t('about.AboutMeDescription1')}</Styled.P>
              <Styled.P>{i18next.t('about.AboutMeDescription2')}</Styled.P>
              <Styled.P>{i18next.t('about.AboutMeDescription3')}</Styled.P>
            </Styled.About>
          </Slide>
          <Slide
            direction="right"
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            triggerOnce
          >
            <Styled.Skills>
              <Styled.H2>{i18next.t('about.SkillsTitle')}</Styled.H2>
              <Skills />
            </Styled.Skills>
          </Slide>
        </Styled.AboutAndSkillsContainer>
      </Styled.MainContainer>
    </Styled.Container>
  )
}
