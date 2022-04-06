import React from 'react'
import ethical from "../../Images/ethical-img.jpg"
import cultureWork from "../../Images/culture-work-img.jpg"

function WhyChooseBest() {
  return (
    <section className="why-best-choose-main">
   <div className="container">
      <div className="row">
         <div className="why-best-choose-con">
            <h2>Why Best Choose to Work With Us.</h2>
            <p>At PragetX, we give more priority to people who loves their work, have this startup mindset, positive attitude towards learning new things, also has creativity, focus, passion, and more importantly who like to work as a team. We believe, for the company we serve, best and fast work deployment is still the top priority.</p>
         </div>
      </div>
      <div className="ethical-career-main">
         <div className="row gy-5">
            <div className="col-lg-6 col-md-12">
               <div className="ethical-career-box">
                  <div className="ethical-img">
                     <img src={ethical}/>
                  </div>
                  <div className="ethical-career-con">
                     <h4>Build an Ethical Career with PragetX.</h4>
                     <p>Learning from each other on each step of our journey and keeping the company’s mission, vision, and values in mind for life helps build an ethical career for anyone who is goal-oriented.</p>
                  </div>
               </div>
            </div>
            <div className="col-lg-6 col-md-12">
               <div className="culture-work-box">
                  <div className="culture-work-img">
                     <img src={cultureWork}/>
                  </div>
                  <div className="ethical-career-con">
                     <h4>Best Culture and Work Environment.</h4>
                     <p>We like to bring creativity to life for our team members. Belief in the culture of our company makes it the best place to work.</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
  )
}

export default WhyChooseBest