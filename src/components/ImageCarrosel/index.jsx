import { useState } from 'react'
import { BiRightArrowAlt, BiLeftArrowAlt } from 'react-icons/bi'

import * as Styled from './styles'

export default function ImageCarrosel({ images }) {
  const [imageIndex, setImageIndex] = useState(0)

  function handleOnRightArrowClick() {
    if (imageIndex < images.length - 1) {
      setImageIndex((i) => i + 1)
    }
  }

  function handleOnLeftArrowClick() {
    if (imageIndex > 0) {
      setImageIndex((i) => i - 1)
    }
  }
  return (
    <Styled.ProejctItemImageContainer>
      {imageIndex > 0 && (
        <BiLeftArrowAlt
          className="arrow arrow-left"
          onClick={handleOnLeftArrowClick}
        />
      )}
      <Styled.Carrosel>
        <Styled.Slider>
          <Styled.Image src={images[imageIndex]} />
        </Styled.Slider>
      </Styled.Carrosel>
      {imageIndex < images.length - 1 && (
        <BiRightArrowAlt
          className="arrow arrow-right"
          onClick={handleOnRightArrowClick}
        />
      )}
    </Styled.ProejctItemImageContainer>
  )
}
