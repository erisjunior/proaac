import React from 'react'

import { Container, Image } from './styles'

export default function SlideShow() {
  return (
    <Container>
      <div>
        <Image src='https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
      </div>
      <div>
        <Image src='https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
      </div>
      <div>
        <Image src='https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
      </div>
    </Container>
  )
}
