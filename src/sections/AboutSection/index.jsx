import SeparateLine from '../../components/Separator'
import Skills from '../../components/Skills'

import i18next from 'i18next'

import * as Styled from './styles'

export default function AboutSection() {
  return (
    <Styled.Container name="about">
      <Styled.MainContainer>
        <Styled.AboutPreviewContainer>
          <Styled.H1>{i18next.t('about.AboutMe')}</Styled.H1>
          <SeparateLine />
          <Styled.AboutPreview>
            {i18next.t('about.AboutMeResume')}
          </Styled.AboutPreview>
        </Styled.AboutPreviewContainer>
        <Styled.AboutAndSkillsContainer>
          <Styled.About>
            <Styled.H2>{i18next.t('about.AboutMeDescriptionTitle')}</Styled.H2>
            <Styled.P>{i18next.t('about.AboutMeDescription1')}</Styled.P>
            <Styled.P>{i18next.t('about.AboutMeDescription2')}</Styled.P>
            <Styled.P>{i18next.t('about.AboutMeDescription3')}</Styled.P>
          </Styled.About>
          <Styled.Skills>
            <Styled.H2>{i18next.t('about.SkillsTitle')}</Styled.H2>
            <Skills />
          </Styled.Skills>
        </Styled.AboutAndSkillsContainer>
      </Styled.MainContainer>
    </Styled.Container>
  )
}
