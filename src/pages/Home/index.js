import React from 'react'

import { Header, Footer } from 'components'

import { SlideShow, Main, ContactArea } from './components'

export default function Home() {
  return (
    <>
      <Header />
      <SlideShow />
      <Main />
      <ContactArea />
      <Footer />
    </>
  )
}
