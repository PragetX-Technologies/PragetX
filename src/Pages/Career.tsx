import React from 'react'
import CareerTopSlider from '../Components/CareerTopSlider/CareerTopSlider'
import JoinOurTeam from '../Components/JoinOurTeam/JoinOurTeam'
import OurWorkEthics from '../Components/OurWorkEthics/OurWorkEthics'
import WeAreHiring from '../Components/WeAreHiring/WeAreHiring'
import WhyChooseBest from '../Components/WhyChooseBest/WhyChooseBest'
import WhyWorkwithUs from '../Components/whyWorkwithus/WhyWorkwithUs'

function Career() {
  return (
    <>
      <CareerTopSlider/>
      <WhyChooseBest/>
      <OurWorkEthics/>
      <JoinOurTeam/>
      <WhyWorkwithUs/>
      <WeAreHiring/>
    </>
  )
}

export default Career