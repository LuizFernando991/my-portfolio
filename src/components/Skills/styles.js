import styled from 'styled-components'

export const Container = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
  gap: 2rem;
`

export const Li = styled.li`
  text-align: center;
  list-style: none;
  font-size: 5rem;
  background-color: var(--bg-primary-color);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  justify-content: center;
  box-shadow: rgba(100, 100, 111, 0.2) 0 7px 29px 0;
`

export const Label = styled.h4`
  line-height: 1.6;
  font-size: 1.2rem;
`
