import React from 'react'
import ceo from "../../Images/ceo.jpg"
import email from "../../Images/email.svg"
import call from "../../Images/call.svg"


function ContactGotStartup() {
  return (
    <section className="contact-startup-main">
    <div className="container">
       <div className="row gy-5">
          <div className="col-lg-7 col-md-12">
             <div className="con-head">
                <h2>Got a startup idea & <br/>need to get it validated?</h2>
                <p>Let us give you our honest opinion.</p>
                <h5>Book your <b>FREE 30 minutes</b> consultation with:</h5>
                <a href="https://calendly.com/pragetx" className="btn">Consult our experts <i className="fa fa-angle-right" aria-hidden="true"></i></a>
             </div>
          </div>
          <div className="col-lg-5 col-md-12">
             <div className="startup-con">
                <img src={ceo}/>
                <div className="startup-got-con">
                   <h5>Mr. Shreyas Gajipara</h5>
                   <span>Founder & CEO</span>
 
                   <a className="d-flex" href="#">
                       <span>
                           <img src={email}/>
                       </span>
                       hello@pragetx.com
                   </a>
                   <a className="d-flex" href="#">
                       <span>
                           <img src={call}/>
                       </span>
                       +91-846-021-8989
                   </a>
                </div>
             </div>
          </div>
       </div>
    </div>
 </section>
  )
}

export default ContactGotStartup