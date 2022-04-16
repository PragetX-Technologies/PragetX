import React from 'react'
import work1 from "../../Images/p-work-ic1.png"
import work2 from "../../Images/p-work-ic2.png"
import work3 from "../../Images/p-work-ic3.png"
import work4 from "../../Images/p-work-ic4.png"
import work5 from "../../Images/p-work-ic5.png"
import work6 from "../../Images/p-work-ic6.png"
import work7 from "../../Images/p-work-ic7.png"
import work8 from "../../Images/p-work-ic8.png"
import work9 from "../../Images/p-work-ic9.png"
import work10 from "../../Images/p-work-ic10.png"
import work11 from "../../Images/p-work-ic11.png"
import work12 from "../../Images/p-work-ic12.png"

function WhyWorkwithUs() {
  return (
    <section className="work-life-main perks-of-work">
   <div className="container">
      <div className="con-head text-center">
         <h2>Perks of Working With PragetX</h2>
         <h5>We provide cutting edge web and mobile app solutions</h5>
      </div>
      <div className="work-life">
         <div className="row gy-5">
            <div className="col-lg-4 col-md-6">
               <div className="work-life-box">
                  <img src={work1}/>
                  <span>5 Working Days a Week</span>
               </div>
            </div>
            <div className="col-lg-4 col-md-6">
               <div className="work-life-box">
                  <img src={work2}/>
                  <span>Flexible Work</span>
               </div>
            </div>
            <div className="col-lg-4 col-md-6">
               <div className="work-life-box">
                  <img src={work3}/>
                  <span>Experienced Team</span>
               </div>
            </div>
            <div className="col-lg-4 col-md-6">
               <div className="work-life-box">
                  <img src={work4}/>
                  <span>Diversify Culture</span>
               </div>
            </div>
            <div className="col-lg-4 col-md-6">
               <div className="work-life-box">
                  <img src={work5}/>
                  <span>Embracing Change</span>
               </div>
            </div>
            <div className="col-lg-4 col-md-6">
               <div className="work-life-box">
                  <img src={work6}/>
                  <span>Referral Programs</span>
               </div>
            </div>
            <div className="col-lg-4 col-md-6">
               <div className="work-life-box">
                  <img src={work8}/>
                  <span>Valid Paid Leaves</span>
               </div>
            </div>
            <div className="col-lg-4 col-md-6">
               <div className="work-life-box">
                  <img src={work7}/>
                  <span>Work as a Team</span>
               </div>
            </div>
            <div className="col-lg-4 col-md-6">
               <div className="work-life-box">
                  <img src={work9}/>
                  <span>Value Suggestions</span>
               </div>
            </div>
            <div className="col-lg-4 col-md-6">
               <div className="work-life-box">
                  <img src={work10}/>
                  <span>Skill Matters Most</span>
               </div>
            </div>
            <div className="col-lg-4 col-md-6">
               <div className="work-life-box">
                  <img src={work11}/>
                  <span>Build Future Career</span>
               </div>
            </div>
            <div className="col-lg-4 col-md-6">
               <div className="work-life-box">
                  <img src={work12}/>
                  <span>Goodies and Gifts</span>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
  )
}

export default WhyWorkwithUs