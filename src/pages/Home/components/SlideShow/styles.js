import styled from 'styled-components'

import { Carousel } from 'react-responsive-carousel'

export const Container = styled(Carousel).attrs({
  showThumbs: false,
  autoPlay: true,
  showStatus: false,
  infiniteLoop: true,
  interval: 6000,
  transitionTime: 800
})`
  height: 500px;
  overflow: hidden;
`

export const Image = styled.img`
  height: 500px;
  object-fit: contain;
  /* object-fit: cover; */
  /* object-fit: fill; */
`
