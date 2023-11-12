import styled from 'styled-components'

export const Container = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  background-color: var(--bg-secondary-color);
  overflow-x: hidden;
`

export const MainContainer = styled.div`
  max-width: 120rem;
  margin: auto;
  margin-top: 10rem;
  width: 92%;
`

export const AboutPreviewContainer = styled.div`
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

export const AboutPreview = styled.p`
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

export const AboutAndSkillsContainer = styled.div`
  margin-top: 10rem;
  margin-bottom: 10rem;
  min-height: 40rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 10rem;
  justify-items: center;
`

export const About = styled.div`
  max-width: 50rem;
`

export const Skills = styled.div`
  max-width: 50rem;
  width: 100%;
`

export const H2 = styled.h2`
  font-weight: 800;
  font-size: 2.8rem;
  margin-bottom: 3rem;
`

export const P = styled.p`
  font-size: 1.8rem;
  max-width: 60rem;
  line-height: 1.7;
  margin-bottom: 1rem;
  text-align: justify;
`
