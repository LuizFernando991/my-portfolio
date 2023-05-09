import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const VideoContainer = styled.div`
  position: absolute;
  margin: auto;
  width: 80%;
  height: 80vh;
  z-index: 12;
  .video {
    width: 100%;
    height: 100%;
  }
`
