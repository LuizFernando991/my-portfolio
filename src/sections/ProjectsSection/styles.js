import styled from 'styled-components'

export const Container = styled.section`
  min-height: 90vh;
  overflow-x: hidden;
`

export const MainContainer = styled.div`
  max-width: 120rem;
  margin: auto;
  margin-top: 10rem;
  width: 92%;
`
export const ProjectsPreviewContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const H1 = styled.h1`
  font-size: 4rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  letter-spacing: 3px;
  margin-bottom: 1.5rem;
`

export const ProjectsPreview = styled.p`
  margin-top: 1.5rem;
  font-size: 2rem;
  font-weight: 500;
  max-width: 80rem;
  line-height: 1.6;
  text-align: center;

  @media (max-width: 810px) {
    max-width: 50rem;
    text-align: justify;
  }
`
