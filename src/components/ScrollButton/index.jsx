import * as Styled from './styles'

export default function ScrollButton({ children, toLink, offSet = -140 }) {
  return (
    <Styled.Button to={toLink} smooth duration={200} offset={offSet}>
      {children}
    </Styled.Button>
  )
}
