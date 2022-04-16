import React from 'react'
import AboutUsCon from '../Components/AboutUsCon/AboutUsCon'
import AboutusTag from '../Components/AboutusTag/AboutusTag'
import AboutUsTagLine from '../Components/AboutUsTagLine/AboutUsTagLine'
import AboutUsTopSlider from '../Components/AboutUsTopSlider/AboutUsTopSlider'
import AreYouStartUP from '../Components/AreYouStartUP/AreYouStartUP'
import AtPragetX from '../Components/AtPragetX/AtPragetX'
import CompanyVideo from '../Components/CompanyVideo/CompanyVideo'
import CoreVal from '../Components/CoreValues/CoreVal'
import CustomerSupport from '../Components/CustomerSupport/CustomerSupport'
import DiscussWithUs from '../Components/DiscussWithUS/DiscussWithUs'
import FeaturesOn from '../Components/FeaturesOn/FeaturesOn'
import Insights from '../Components/Insights/Insights'
import OurMissionVision from '../Components/OurMissionVision/OurMissionVision'
import ReadOurReview from '../Components/ReadOurReview/ReadOurReview'
import ReadOurReviewsAboutus from '../Components/ReadOurReviewsAboutus/ReadOurReviewsAboutus'
import TrustedBy from '../Components/trustedBy/TrustedBy'
import WorkLife from '../Components/WorkLife/WorkLife'

function AboutUs() {
  return (
      <>
        <AboutUsTopSlider/>
        {/* <AboutUsTagLine/> */}
        <ReadOurReviewsAboutus/>
        <AboutUsCon/>
        <AboutusTag/>
        <AreYouStartUP/>
        <OurMissionVision/>
        <AtPragetX/>
        <CoreVal/>
        {/* <CompanyVideo/> */}
        {/* <FeaturesOn/> */}
        <TrustedBy/>
        {/* <Insights/> */}
        {/* <WorkLife/>  */}
        <CustomerSupport/>
        <DiscussWithUs/>
      </>
      )
    }
    
export default AboutUs