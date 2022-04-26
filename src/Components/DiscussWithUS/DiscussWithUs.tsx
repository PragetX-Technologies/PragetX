import React from 'react'

function DiscussWithUs() {
   
   const DiscussWithUsContent={
      h3HeaderLine1:"We are your ideal partner to leverage ",
      h3HeaderLine2:"emerging tech in innovative ways.",
      CTA:"Let’S Discuss your Project"
   }

  return (
    <section className="discuss-your-project-main">
   <div className="container">
      <div className="discuss-your-project-con">
         <div className="discuss-left">
            <h3>{DiscussWithUsContent.h3HeaderLine1}<br/>{DiscussWithUsContent.h3HeaderLine2}</h3>
         </div>
         <div className="discuss-btn">
            <a href="#" className="btn">{DiscussWithUsContent.CTA} <i className="fa fa-angle-right" aria-hidden="true"></i></a>
         </div>
      </div>
   </div>   
</section>
  )
}

export default DiscussWithUs