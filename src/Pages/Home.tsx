import React from 'react'
import AboutUs from '../Components/AboutUs/AboutUs'
import ClientLogo from '../Components/ClientLogo/ClientLogo'
import EmergingTechnology from '../Components/EmergingTechnologu/EmergingTechnology'
import HeaderTopSlider from '../Components/Header-Top-Slider/HeaderTopSlider'
import ReadOurReview from '../Components/ReadOurReview/ReadOurReview'
import ServicesMain from '../Components/ServicesMain/ServicesMain'
import TechnologiesWeWork from '../Components/TechnologiesWeWork/TechnologiesWeWork'
import WeAreTagLine from '../Components/WeAreTagLine/WeAreTagLine'
import HowWeWork from '../Components/HowWeWork/HowWeWork'
import WordsClient from '../Components/WordsClient/WordsClient'
import AreYouStartUP from '../Components/AreYouStartUP/AreYouStartUP'
import AcrossTheWorld from '../Components/AcrossTheWorld/AcrossTheWorld'
import DiscussWithUs from '../Components/DiscussWithUS/DiscussWithUs'
import FeaturesOn from '../Components/FeaturesOn/FeaturesOn'
import OurClientSays from '../Components/OurClientSays/OurClientSays'
import HomePortFolio from '../Components/HomePortFolio/HomePortFolio'
import IndustriesWeServe from '../Components/IndustriesWeServe/IndustriesWeServe'
import CustomerSupport from '../Components/CustomerSupport/CustomerSupport'
import TrustedBy from '../Components/trustedBy/TrustedBy'
import ServingFortune from '../Components/ServingFortune/ServingFortune'
import BottomContactForm from '../Components/BottomContactForm/BottomContactForm'

function Home() {
  return (
    <>
    <HeaderTopSlider/>
    <ClientLogo/>
    <EmergingTechnology/>
    <WeAreTagLine/>
    <AboutUs/>
    <ReadOurReview/>
    <ServicesMain/>
    <TechnologiesWeWork/>
    {/* <HomePortFolio/> */}
    <HowWeWork/>
    <TrustedBy/>
    {/* <CustomerSupport/> */}
    <FeaturesOn/>
    <IndustriesWeServe/>
    {/* <ServingFortune/> */}
    {/* <WordsClient/> */}
    <AreYouStartUP/>
    <AcrossTheWorld/>
    <DiscussWithUs/>
    <OurClientSays/>
    <BottomContactForm/>

    </>
  )
}

export default Home