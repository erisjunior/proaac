import React from 'react'

import { Container, Image, Nav, ItemNav } from './styles'

export default function Header() {
  return (
    <Container>
      <Image src='images/LogoTotem.png' />
      <Nav>
        <ItemNav>INÍCIO</ItemNav>
        <ItemNav>IMÓVEIS</ItemNav>
        <ItemNav>SERVIÇOS</ItemNav>
        <ItemNav>PROJETOS</ItemNav>
        <ItemNav>SOBRE</ItemNav>
      </Nav>
    </Container>
  )
}
