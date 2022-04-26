import React from 'react'

function AboutUsTopSlider() {
   
   const AboutUSTopSliderContent = {
      h5headerAboveh1title: "A visionary & upcoming leading software development company based in India",
      h1Title: "A Dedicated & Agile Team of Developers",
      h1TtileHighlitedText: "At Your Service",
      h5headerBelowh1title: "PragetX is an extended team of experienced software developers who are on a mission to help businesses in their digital transformation journey through dedication and the latest technology support.",
   }

   return (
      <section className="header-top-slider about-top-slider">
         <div className="container">
            <div className="row">
               <div className="header-top-con">
                  <h5>{AboutUSTopSliderContent.h5headerAboveh1title}</h5>
                  <h1>{AboutUSTopSliderContent.h1Title}<br /><span>{AboutUSTopSliderContent.h1TtileHighlitedText}</span> </h1>
                  <h5>{AboutUSTopSliderContent.h5headerBelowh1title}</h5>
               </div>
            </div>
         </div>
      </section>
   )
}

export default AboutUsTopSlider