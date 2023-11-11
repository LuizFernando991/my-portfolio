import styled from 'styled-components'

export const Container = styled.ul`
  width: 100%;
  margin-top: 5rem;
  margin-bottom: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  user-select: none;
`

export const ProjectItem = styled.li`
  list-style: none;
  display: grid;
  justify-items: center;
  gap: 6rem;
  margin-top: 10rem;
`

export const PreviewImageContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const PreviewImage = styled.img`
  width: 100%;
  max-width: max-content;
`

export const ProejctItemDescriptionContainer = styled.div`
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
`

export const Title = styled.h2`
  font-weight: 700;
  font-size: 2.8rem;
  margin-bottom: 2rem;
`

export const ProjectDescription = styled.p`
  font-size: 1.8rem;
  max-width: 60rem;
  line-height: 1.4;
  margin-bottom: 3rem;
  text-align: justify;
`

export const Icons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const TecIconsContainer = styled.div`
  font-size: 3rem;
  display: flex;
  gap: 2rem;
`

export const CodeAndDemoLinks = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 2rem;
  font-size: 3rem;
`

export const Link = styled.a`
  text-decoration: none;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-grey);
  border-radius: 4rem;
  cursor: pointer;
`
