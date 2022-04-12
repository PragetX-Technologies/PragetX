import React from 'react'
import img1 from "../../Images/work-ic1.png"
import img2 from "../../Images/work-ic2.png"
import img3 from "../../Images/work-ic3.png"
import img4 from "../../Images/work-ic4.png"
import img5 from "../../Images/work-ic5.png"
import img6 from "../../Images/work-ic6.png"
import img7 from "../../Images/work-ic7.png"
import img8 from "../../Images/work-ic8.png"


function CoreVal() {
  return (
    <section className="core-values-main">
   <div className="container">
      <div className="con-head text-center">
         <h2>Our Core Values</h2>
         <h5>At Pragetx, we embrace a well-established set of cultural and professional values which defines how we engage as colleagues, fellows, alumni, partners, and board members.</h5>
      </div>
      <div className="core-values">
         <div className="row gy-5">
            <div className="col-lg-4 col-md-6">
               <div className="core-values-box">
                  <img src={img1}/>
                  <div className="values-con">
                     <span>Customer Comes First</span>
                     <p>All clients of PragetX are our key to success and an essential part of this thriving organization..</p>
                  </div>
               </div>
            </div>
            <div className="col-lg-4 col-md-6">
               <div className="core-values-box">
                  <img src={img2}/>
                  <div className="values-con">
                     <span>Satisfaction</span>
                     <p>A team that sticks to the words given till the end of the project delivery</p>
                  </div>
               </div>
            </div>
            <div className="col-lg-4 col-md-6">
               <div className="core-values-box">
                  <img src={img3}/>
                  <div className="values-con">
                     <span>Honesty</span>
                     <p>Complete transparency is what we aim for, and we follow through by all means.</p>
                  </div>
               </div>
            </div>
            <div className="col-lg-4 col-md-6">
               <div className="core-values-box">
                  <img src={img4}/>
                  <div className="values-con">
                     <span>Integrity</span>
                     <p>Our ethics and professionalism to deal with industry problems define our work culture.</p>
                  </div>
               </div>
            </div>
            <div className="col-lg-4 col-md-6">
               <div className="core-values-box">
                  <img src={img5}/>
                  <div className="values-con">
                     <span>Accountability</span>
                     <p>No matter how difficult a project is, we strive to achieve the desired benchmarks</p>
                  </div>
               </div>
            </div>
            <div className="col-lg-4 col-md-6">
               <div className="core-values-box">
                  <img src={img6}/>
                  <div className="values-con">
                     <span>Cognitive Teamwork</span>
                     <p>No project work can be done alone better than teamwork, and that's what lies at the center of PragetX.</p>
                  </div>
               </div>
            </div>
            <div className="col-lg-4 col-md-6">
               <div className="core-values-box">
                  <img src={img7}/>
                  <div className="values-con">
                     <span>Passionate Teams:</span>
                     <p>A passion to deliver projects with multiple times, cross-verifications and amendments until the objectives are met.</p>
                  </div>
               </div>
            </div>
            <div className="col-lg-4 col-md-6">
               <div className="core-values-box">
                  <img src={img8}/>
                  <div className="values-con">
                     <span>Skills Above Everything</span>
                     <p> At PragetX, we choose our team members by assessing their skills rather than giving priority to their degre</p>
                  </div>
               </div>
            </div>
            <div className="col-lg-4 col-md-6">
               <div className="core-values-box">
                  <img src={img8}/>
                  <div className="values-con">
                     <span>Value to Time</span>
                     <p>No matter how big or small and easy or difficult a project is, we ensure to meet the deadline every time.</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
  )
}

export default CoreVal