import React from 'react'
import ceo from "../../Images/ceo.jpg"
import email from "../../Images/email.svg"
import call from "../../Images/call.svg"


function ContactGotStartup() {
   
  const contactGotStartupContact = {
     h2HeaderLine1:"Have a startup idea &",
     h2HeaderLine2:"need to discuss with us?",
     h5HeaderLine1:"Book your",
     h5HeaderHighlighted:"FREE 30 minutes",
     h5HeaderLine2:"consultation with:",
     paragraph:"Let us give you our honest opinion.",
     CTA:"Consult our experts",
     name:"Mr. Shreyas Gajipara",
     designation:"Founder & CEO",
     email:"hello@pragetx.com",
     number:"+91-846-021-8989"
  }
  
  return (
    <section className="contact-startup-main">
    <div className="container">
       <div className="row gy-5">
          <div className="col-lg-7 col-md-12">
             <div className="con-head">
                <h2> {contactGotStartupContact.h2HeaderLine1} <br/>{contactGotStartupContact.h2HeaderLine2}</h2>
                <p>{contactGotStartupContact.paragraph}</p>
                <h5>{contactGotStartupContact.h5HeaderLine1} <b> {contactGotStartupContact.h5HeaderHighlighted} </b>{contactGotStartupContact.h5HeaderLine2}</h5>
                <a href="https://calendly.com/pragetx" className="btn">{contactGotStartupContact.CTA} <i className="fa fa-angle-right" aria-hidden="true"></i></a>
             </div>
          </div>
          <div className="col-lg-5 col-md-12">
             <div className="startup-con">
                <img src={ceo}/>
                <div className="startup-got-con">
                   <h5>{contactGotStartupContact.name}</h5>
                   <span>{contactGotStartupContact.designation}</span>
 
                   <a className="d-flex" href="#">
                       <span>
                           <img src={email}/>
                       </span>
                       {contactGotStartupContact.email}
                   </a>
                   <a className="d-flex" href="#">
                       <span>
                           <img src={call}/>
                       </span>
                       {contactGotStartupContact.number}
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