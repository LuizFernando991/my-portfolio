import styled from 'styled-components'

export const Container = styled.footer`
  background-color: #000;
  color: #fff;
`
export const ContentContainer = styled.div`
  max-width: 120rem;
  margin: auto;
  width: 92%;
  display: flex;
  justify-content: space-between;
  padding: 8rem 0;
`

export const AboutMe = styled.div`
  width: 40%;
  max-width: 50rem;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
`
export const H2 = styled.h2`
  font-size: 2.2rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`

export const AboutMeDescription = styled.p`
  margin-top: 2rem;
  color: #eee;
  font-size: 1.5rem;
  line-height: 1.7;
`

export const Socials = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`

export const Links = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 2rem;
  font-size: 3rem;
`

export const Link = styled.a`
  cursor: pointer;
  color: #fff;
  &:visited {
    color: #fff;
  }
`
