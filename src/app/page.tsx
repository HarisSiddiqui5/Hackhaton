import React from 'react'
import HeroSection from './heroSection/page'
import BrandSection from './brandSection/page'
import ProductList from './featureProduct/page'
import TopCategory from './topCategory/page'
import PopularStyles from './popularStyles/page'
import OurProducts from './ourProducts/page'

export default function Page() {
  return (
    <div>
      <HeroSection/>
      <BrandSection/>
      <ProductList/>
      <TopCategory/>
      <PopularStyles/>
      <OurProducts/>
    </div>
  )
}
