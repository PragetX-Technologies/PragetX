import React from 'react'
import Videoo from "../../Images/careertop.mp4";

function CareerTopSlider() {

   const CareerTopSliderContent={
      h1Headerline1:"A Work Culture That Everyone",
      h1HeaderHighlight:"Wants to Be A Part of",
      CTA:"Join Our Visionary Team"
   }

   return (
      <section className="header-top-slider career-top-slider">
         <div className="career-video-bg">
            <video
               src={Videoo}
               muted
               autoPlay={true}
               loop
            > </video>
         </div>
         <div className="container">
            <div className="row">
               <div className="header-top-con">
                  <h1>{CareerTopSliderContent.h1Headerline1}<br/><span>{CareerTopSliderContent.h1HeaderHighlight}</span></h1>
                  <a href="/" className="btn">{CareerTopSliderContent.CTA} <i className="fa fa-angle-right" aria-hidden="true"></i></a>
               </div>
            </div>
         </div>
      </section>
   )
}

export default CareerTopSlider