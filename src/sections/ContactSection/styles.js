import styled from 'styled-components'

export const Container = styled.section`
  background-color: var(--bg-secondary-color);
  min-height: 100vh;
  display: block;
  position: static;
`
export const MainContainer = styled.div`
  max-width: 120rem;
  margin: auto;
  margin-top: 10rem;
  width: 92%;
`

export const PreviewContainer = styled.div`
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
  margin-top: 8rem;
`

export const Description = styled.p`
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

export const SocialLinksContainer = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-items: center;
  margin-top: 24rem;
`

export const Li = styled.li`
  list-style: none;
  color: var(--color-primary);

  a {
    text-decoration: none;
    color: var(--color-primary);
    font-size: 6rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0.7;

    span {
      font-size: 2rem;
      margin-top: 1rem;
    }
  }

  a:hover {
    opacity: 1;
  }

  a:visited {
    color: var(--color-primary);
  }
`
