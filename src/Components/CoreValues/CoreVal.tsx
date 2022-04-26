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
   
   const CoreValueContent={
      h2Header:"Our Core Values",
      h5Header:"At Pragetx, we embrace a well-established set of cultural and professional values which defines how we engage as colleagues, fellows, alumni, partners, and board members.",
      ContentArray:[
         {
            img:img1,
            heading:"Customer Comes First",
            paragraph:"All clients of PragetX are our key to success and an essential part of this thriving organization.."
         },
         {
            img:img2,
            heading:"Satisfaction",
            paragraph:"A team that sticks to the words given till the end of the project delivery"
         },
         {
            img:img3,
            heading:"Honesty",
            paragraph:"Complete transparency is what we aim for, and we follow through by all means."
         },
         {
            img:img4,
            heading:"Integrity",
            paragraph:"Our ethics and professionalism to deal with industry problems define our work culture."
         },
         {
            img:img5,
            heading:"Accountability",
            paragraph:"No matter how difficult a project is, we strive to achieve the desired benchmarks"
         },
         {
            img:img6,
            heading:"Cognitive Teamwork",
            paragraph:"No project work can be done alone better than teamwork, and that's what lies at the center of PragetX."
         },
         {
            img:img7,
            heading:"Passionate Teams:",
            paragraph:"A passion to deliver projects with multiple times, cross-verifications and amendments until the objectives are met."
         },
         {
            img:img8,
            heading:"Skills Above Everything",
            paragraph:"At PragetX, we choose our team members by assessing their skills rather than giving priority to their degree"
         },
         {
            img:img8,
            heading:"Value to Time",
            paragraph:"No matter how big or small and easy or difficult a project is, we ensure to meet the deadline every time."
         },
      ]
   }

  return (
    <section className="core-values-main">
   <div className="container">
      <div className="con-head text-center">
         <h2>{CoreValueContent.h2Header}</h2>
         <h5>{CoreValueContent.h2Header}</h5>
      </div>
      <div className="core-values">
         <div className="row gy-5">
            {
               CoreValueContent.ContentArray && CoreValueContent.ContentArray.map((i)=>(
                  <div className="col-lg-4 col-md-6">
                     <div className="core-values-box">
                        <img src={i.img}/>
                        <div className="values-con">
                           <span>{i.heading}</span>
                           <p>{i.paragraph}</p>
                        </div>
                     </div>
                  </div>
               ))
            }
         </div>
      </div>
   </div>
</section>
  )
}

export default CoreVal