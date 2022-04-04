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
         <h5>At Pragetx, we embrace a well-established set of cultural and professional values which <br/>represent our highest aspirations for how we engage as colleagues, fellows, alumni, partners, and board members.</h5>
      </div>
      <div className="core-values">
         <div className="row gy-5">
            <div className="col-lg-4 col-md-6">
               <div className="core-values-box">
                  <img src={img1}/>
                  <div className="values-con">
                     <span>Customer Comes First</span>
                     <p>Treat others as you would like yourself to be treated.</p>
                  </div>
               </div>
            </div>
            <div className="col-lg-4 col-md-6">
               <div className="core-values-box">
                  <img src={img2}/>
                  <div className="values-con">
                     <span>Stay Goal-Oriented</span>
                     <p>Treat others as you would like yourself to be treated.</p>
                  </div>
               </div>
            </div>
            <div className="col-lg-4 col-md-6">
               <div className="core-values-box">
                  <img src={img3}/>
                  <div className="values-con">
                     <span>Embrace the Change</span>
                     <p>Treat others as you would like yourself to be treated.</p>
                  </div>
               </div>
            </div>
            <div className="col-lg-4 col-md-6">
               <div className="core-values-box">
                  <img src={img4}/>
                  <div className="values-con">
                     <span>Always be a Torchbearer</span>
                     <p>Treat others as you would like yourself to be treated.</p>
                  </div>
               </div>
            </div>
            <div className="col-lg-4 col-md-6">
               <div className="core-values-box">
                  <img src={img5}/>
                  <div className="values-con">
                     <span>Never Ever Complain</span>
                     <p>Treat others as you would like yourself to be treated.</p>
                  </div>
               </div>
            </div>
            <div className="col-lg-4 col-md-6">
               <div className="core-values-box">
                  <img src={img6}/>
                  <div className="values-con">
                     <span>Skills Most Important</span>
                     <p>Treat others as you would like yourself to be treated.</p>
                  </div>
               </div>
            </div>
            <div className="col-lg-4 col-md-6">
               <div className="core-values-box">
                  <img src={img7}/>
                  <div className="values-con">
                     <span>New Skills Over Experience</span>
                     <p>Treat others as you would like yourself to be treated.</p>
                  </div>
               </div>
            </div>
            <div className="col-lg-4 col-md-6">
               <div className="core-values-box">
                  <img src={img8}/>
                  <div className="values-con">
                     <span>Attitude to Learn New Things</span>
                     <p>Treat others as you would like yourself to be treated.</p>
                  </div>
               </div>
            </div>
            <div className="col-lg-4 col-md-6">
               <div className="core-values-box">
                  <img src={img8}/>
                  <div className="values-con">
                     <span>Teamwork is New Smart Work</span>
                     <p>Treat others as you would like yourself to be treated.</p>
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