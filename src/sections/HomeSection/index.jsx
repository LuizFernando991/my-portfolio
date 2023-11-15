import { Typewriter } from 'react-simple-typewriter'
import ScrollButton from '../../components/ScrollButton'
import AsideSocialLinks from '../../components/AsideSocialLinks'

import i18next from 'i18next'

import * as Styled from './styles'

export default function HomeSection() {
  return (
    <Styled.Container name="home">
      <Styled.ContentContainer>
        <Styled.HiContainer>
          <Styled.H1>
            <Typewriter cursor words={[`${i18next.t('hisection.title')}`]} />
          </Styled.H1>
          <Styled.DescriptionContainer>
            <Styled.Description>
              {i18next.t('hisection.description')}
            </Styled.Description>
          </Styled.DescriptionContainer>
          <Styled.ButtonContaier>
            <ScrollButton toLink="projects" offSet={-100}>
              {i18next.t('hisection.button')}
            </ScrollButton>
          </Styled.ButtonContaier>
        </Styled.HiContainer>
      </Styled.ContentContainer>
      <AsideSocialLinks />
    </Styled.Container>
  )
}
