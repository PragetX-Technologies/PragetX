import React from 'react'
import GoodFirms from "../../Images/goodfirms.png"
import Clutch from "../../Images/clutch.png"
import AppFuture from "../../Images/appfutura.png"
import GlassDoor from "../../Images/glassdoor.png"
import MobileAppDaily from "../../Images/mobile-app-daily.png"


function HeaderTopSlider() {
   
   const HeaderTopSliderContent={
      h1HeaderLine1:"Best Agile",
      h1HeaderHighlight:"Collaboration",
      h1HeaderLine2:"in the Age of Remote Work",
      h6Header:"Leverage the IT professionals at PragetX to help you ease up your digital transformation journey with emerging technologies, like Web 3.0.",
      CTA:"Inquire Now"
   }

  return (
    <section className="header-top-slider">
   <div className="container">
      <div className="row">
         <div className="header-top-con">
            <h1>{HeaderTopSliderContent.h1HeaderLine1} <span> {HeaderTopSliderContent.h1HeaderHighlight} </span>  <br/> {HeaderTopSliderContent.h1HeaderLine2}</h1>
            <h6>{HeaderTopSliderContent.h6Header}</h6>
            <a href="#" className="btn">{HeaderTopSliderContent.CTA} <i className="fa fa-angle-right" aria-hidden="true"></i></a>
         </div>
      </div>
   </div>
</section>
  )
}

export default HeaderTopSlider