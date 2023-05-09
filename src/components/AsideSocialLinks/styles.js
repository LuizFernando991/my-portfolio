import styled from 'styled-components'

export const Container = styled.div`
  display: none;
  position: absolute;
  transform: translateY(-20%);

  ul {
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 1024px) {
    display: block;
  }
`

export const Li = styled.li`
  background-color: var(--color-secondary);
  display: flex;
  justify-content: space-between;
  padding: 10px 16px;
  transition: all ease-in 0.1s;
  transform: translate3d(-90px, 0px, 0px);

  span {
    width: 80px;
  }

  a {
    text-decoration: none;
    color: #f1f1f1;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  a:visited {
    color: #f1f1f1;
  }

  svg {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    margin-left: 10px;
  }

  &:first-child {
    border-radius: 0px 3px 0px 0px;
  }

  &:last-child {
    border-radius: 0px 0px 3px 0px;
  }

  &:hover {
    transform: translate3d(0px, 0px, 0px);
    border-radius: 0px 3px 3px 0px;
  }
`
