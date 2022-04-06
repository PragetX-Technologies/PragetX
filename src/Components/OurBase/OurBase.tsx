import React from 'react'
import emailfsvg from "../../Images/email-f.svg"
import callfsvg from "../../Images/call-f.svg"


function OurBase() {
  return (
    <section className="our-base-main">
    <div className="container">
       <div className="our-base-con">
          <div className="con-head text-center">
             <h2>Our Base</h2>
             <h5>Times Square Arcade, Thaltej-Shilaj Road, Thaltej, Ahmedabad, India – 380059</h5>
          </div>
          <div className="our-base">
             <a className="d-flex" href="#">
                <span>
                   <img src={callfsvg}/>
                </span>
                +91-846-021-8989
             </a>
             <a className="d-flex" href="#">
                <span>
                   <img src={emailfsvg}/>
                </span>
                hello@pragetx.com
             </a>
          </div>
       </div>
    </div>
 </section>
  )
}

export default OurBase