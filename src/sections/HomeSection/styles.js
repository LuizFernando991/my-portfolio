import styled from 'styled-components'
import bgsvg from '../../assets/common-bg.svg'
import bgdarksvg from '../../assets/common-dark-bg.svg'

export const Container = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  background-color: ${(props) =>
    props.theme.title === 'light' ? '#f1f1f1' : '#383838'};
  background-attachment: fixed;
  background-size: cover;
  background-image: ${(props) =>
    props.theme.title === 'light' ? `url(${bgsvg})` : `url(${bgdarksvg})`};
`

export const ContentContainer = styled.div`
  width: 100%;
  min-height: 80rem;
  max-height: 120rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const HiContainer = styled.div`
  // transform: translateY(-20%);
  max-width: 90rem;
  width: 92%;
`

export const H1 = styled.h1`
  font-size: 6rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  text-align: center;
  color: var(--color-primary);
  font-weight: 800;
  text-shadow: 5px 5px 5px
    ${(props) =>
      props.theme.title === 'light' ? 'rgba(0,0,0,0.2)' : 'rgba(0,0,0, 0.6)'};
`

export const DescriptionContainer = styled.div`
  margin: 3rem auto 0 auto;
  max-width: 80rem;
`
export const Description = styled.p`
  color: var(--color-primary);
  font-size: 2.2rem;
  font-weight: 600;
  text-align: center;
  width: 100%;
  line-height: 1.6;
  text-shadow: 5px 5px 5px
    ${(props) =>
      props.theme.title === 'light' ? 'rgba(0,0,0,0.2)' : 'rgba(0,0,0,0.6)'};
`

export const ButtonContaier = styled.div`
  margin-top: 5rem;
  text-align: center;
`
