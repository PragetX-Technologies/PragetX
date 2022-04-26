import React from 'react'
import img from '../../Images/contact-top-img1.png'

function ContactUsTopSlider() {
   
   const contactUsTopSliderContent ={
      h1Header:"How can we help you?",
      h5Header:"At Pragetx, We Have Made it Easy for Clients to Reach Us and Get Their Solutions WeavedAt Pragetx, We Have Made it Easy for Clients to Reach Us and Get Their Solutions Weaved",
   }

  return (
    <section className="contact-top-slider">
    <div className="container-fluid">
       <div className="row gy-5">
          <div className="col-lg-6 col-md-12">
             <div className="contact-top-con">
                <h1>{contactUsTopSliderContent.h1Header}</h1>
                <h5>{contactUsTopSliderContent.h5Header}</h5>
             </div>
          </div>
          <div className="col-lg-6 col-md-12">
             <div className="contact-top-img">
                <img src={img}/>
             </div>
          </div>
       </div>
    </div>
 </section>
  )
}

export default ContactUsTopSlider