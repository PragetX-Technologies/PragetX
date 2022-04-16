import React from 'react'
import CustomerSupportImg from "../../Images/customer-support-img.png"
import Email from "../../Images/cs-email-ic.svg"
import Call from "../../Images/cs-call-ic.svg"
import VideoCall from "../../Images/cs-video-call-ic.svg"
import Chat from "../../Images/cs-chat-ic.svg"

function CustomerSupport() {
  return (
    <section className="customer-support-main">
   <div className="container">
      <div className="customer-support">
         <div className="row gy-5">
            <div className="col-lg-6 col-md-12">
               <div className="customer-support-con">
                  <h2>Custom Software & <br/>Services</h2>
                  <p>Our Highly skilled IT Service team is ready to support with very short period of time and also it will be available as on-demand.</p>
                  <a href="/Contactus" className="btn">Contact Us <i className="fa fa-angle-right" aria-hidden="true"></i></a>
               </div>
            </div>
            <div className="col-lg-6 col-md-12">
               <div className="trusted-by-img">
                  <h3>24 X 7</h3>
                  <img src={CustomerSupportImg}/>
                  <h3>Support</h3>
                  <a href="#" className="cus-ic1"><img src={Email}/></a>
                  <a href="#" className="cus-ic2"><img src={Call}/></a>
                  <a href="#" className="cus-ic3"><img src={VideoCall}/></a>
                  <a href="#" className="cus-ic4"><img src={Chat}/></a>
               </div>
            </div>
         </div>
      </div>
   </div>   
</section>
  )
}

export default CustomerSupport