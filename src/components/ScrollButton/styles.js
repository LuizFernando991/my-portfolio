import styled from 'styled-components'
import { Link } from 'react-scroll'

export const Button = styled(Link)`
  padding: 1.5rem 8rem;
  font-size: 2rem;
  background: var(--color-secondary);
  color: var(--color-grey);
  text-transform: uppercase;
  letter-spacing: 1px;
  display: inline-block;
  font-weight: 700;
  border-radius: 5px;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.15);
  transition: transform 0.3s;
  &:hover {
    box-shadow: 0 15px 20px 0 rgba(0, 0, 0, 0.15);
    transform: translateY(-5px);
    filter: brightness(1.1);
  }
  cursor: pointer;
`
