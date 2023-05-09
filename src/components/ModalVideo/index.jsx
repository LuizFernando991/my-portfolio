import * as Styled from './styles'

export default function ModalVideo({ link, setLink }) {
  return (
    <>
      <Styled.Container onClick={() => setLink(null)}>
        <Styled.VideoContainer>
          <iframe
            width="1585"
            height="661"
            src={link}
            title="Instagram Clone - Next.js/Node.js/MongoDB"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;"
            allowfullscreen="true"
            className="video"
          />
        </Styled.VideoContainer>
      </Styled.Container>
    </>
  )
}
