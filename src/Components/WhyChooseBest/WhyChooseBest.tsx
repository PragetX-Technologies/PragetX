import React from 'react'
import ethical from "../../Images/ethical-img.jpg"
import cultureWork from "../../Images/culture-work-img.jpg"

function WhyChooseBest() {
  return (
    <section className="why-best-choose-main">
   <div className="container">
      <div className="row">
         <div className="why-best-choose-con">
            <h2>Why Work With PragetX?</h2>
            <p>At PragetX, we ensure that our team has a great balance between personal and corporate life. Being a thriving IT firm, we give priority to people with a startup mindset, a positive attitude towards learning new things, higher grasping power, creativity, focus, passion, and most importantly, team player quality. We value quality work delivery within the promised timeline.</p>
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
                     <h4>Accelerate Your Career with PragetX</h4>
                     <p>Continuous learning, analytical skills, and following the company’s mission, vision, and values at the workplace would help your/any goal-oriented personality build an ethical career.</p>
                  </div>
               </div>
            </div>
            <div className="col-lg-6 col-md-12">
               <div className="culture-work-box">
                  <div className="culture-work-img">
                     <img src={cultureWork}/>
                  </div>
                  <div className="ethical-career-con">
                     <h4>Best Culture and Work Environment</h4>
                     <p>We like to motivate our team in every difficult phase, giving them the confidence to 'Just Do It!', and bring out their creativity, like a friend, mentor, or well-wisher would do. This culture at PragetX makes it a great place to work.</p>
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