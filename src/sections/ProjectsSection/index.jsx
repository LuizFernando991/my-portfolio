import { Fade } from 'react-awesome-reveal'
import ProjectsList from '../../components/ProjectsList'
import SeparateLine from '../../components/Separator'
import i18next from 'i18next'

import * as Styled from './styles'

export default function ProjectsSection() {
  return (
    <Styled.Container name="projects">
      <Styled.MainContainer>
        <Fade triggerOnce>
          <Styled.ProjectsPreviewContainer>
            <Styled.H1>{i18next.t('projects.Projects')}</Styled.H1>
            <SeparateLine />
            <Styled.ProjectsPreview>
              {i18next.t('projects.ProjectsResume')}
            </Styled.ProjectsPreview>
          </Styled.ProjectsPreviewContainer>
        </Fade>
        <ProjectsList />
      </Styled.MainContainer>
    </Styled.Container>
  )
}
