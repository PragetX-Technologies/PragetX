import React from 'react'
import img from '../../Images/contact-top-img1.png'

function ContactUsTopSlider() {
  return (
    <section className="contact-top-slider">
    <div className="container-fluid">
       <div className="row gy-5">
          <div className="col-lg-6 col-md-12">
             <div className="contact-top-con">
                <h1>How can we help you?</h1>
                <h5>At Pragetx, We Have Made it Easy for Clients to Reach Us and Get Their Solutions Weaved</h5>
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