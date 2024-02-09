import React from 'react'
import Explore from '../components/Explore/Explore'
import Hero from '../components/Hero/Hero'
import NewsLetter from '../components/NewsLetter/NewsLetter'
import Offers from '../components/Offers/Offers'
import Popular from '../components/Popular/Popular'

export default function () {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <Explore />
      <NewsLetter />
    </div>
  )
}
