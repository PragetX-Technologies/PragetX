import React from 'react'

function AreYouStartUP() {
   
   const AreYouStartUPContent = {
      h3HeaderLine1:"Looking for the right IT partner to help you accelerate",
      h3HeaderLine2:"your digital business transformation journey?",
      paragraph1:`Then you're at the right place."Being a Startup, we understand how important it is for a business to have the right technology and tools in place".`,
      paragraph2:"Leverage us to be an essential part of your digital transformation journey and pave this initial phase of business growth TOGETHER!.",
      CTA:"View More",
   }

  return (
    <section className="are-you-startup-main">
   <div className="container-fluid">
      <div className="con-head text-center">
         <h3>{AreYouStartUPContent.h3HeaderLine1}<br/>{AreYouStartUPContent.h3HeaderLine2}</h3>
         <p>{AreYouStartUPContent.paragraph1}<br/>{AreYouStartUPContent.paragraph2}</p>
         <a href="#" className="btn">{AreYouStartUPContent.CTA} <i className="fa fa-angle-right" aria-hidden="true"></i></a>
      </div>
   </div>   
</section>
  )
}

export default AreYouStartUP