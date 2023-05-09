import styled from 'styled-components'

export const ProejctItemImageContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  .arrow {
    font-size: 30px;
    border-radius: 50px;
    background-color: var(--color-secondary);
    position: absolute;
    top: calc(50% - 12px);
    color: #fff;
    z-index: 2;
    transition: transform ease-in 0.2s;
    transform: scale(0.9);
    cursor: pointer;
    :hover {
      transform: scale(1);
    }
  }

  .arrow-right {
    right: 15px;
  }

  .arrow-left {
    left: 15px;
  }
`

export const Carrosel = styled.div`
  overflow: hidden;
  display: flex;
  width: 100%;
  max-height: 28rem;
`

export const Slider = styled.div`
  display: flex;
  overflow: hidden;
  transition: all ease-in-out 0.5s;
`

export const Image = styled.img`
  width: 100%;
  transition: all ease-in-out 0.2s;
  object-fit: contain;
  user-select: none;
`
