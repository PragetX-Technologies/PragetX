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
   const WhyWorkwithUsContent={
      h2Header:"Perks of Working With PragetX",
      h5Header:"We provide cutting edge web and mobile app solutions",
      ContentArray:[
         {
            id:1,
            img:work1,
            heading:"5 Working Days a Week",
         },
         {
            id:2,
            img:work2,
            heading:"Flexible Work",
         },
         {
            id:3,
            img:work3,
            heading:"Experienced Team",
         },
         {
            id:4,
            img:work4,
            heading:"Diversify Culture",
         },
         {
            id:5,
            img:work5,
            heading:"Embracing Change",
         },
         {
            id:6,
            img:work6,
            heading:"Referral Programs",
         },
         {
            id:7,
            img:work8,
            heading:"Valid Paid Leaves",
         },
         {
            id:8,
            img:work7,
            heading:"Work as a Team",
         },
         {
            id:9,
            img:work9,
            heading:"Value Suggestions",
         },
         {
            id:10,
            img:work10,
            heading:"Skill Matters Most",
         },
         {
            id:11,
            img:work11,
            heading:"Build Future Career",
         },
         {
            id:12,
            img:work12,
            heading:"Goodies and Gifts",
         },
      ]
   }
  return (
    <section className="work-life-main perks-of-work">
   <div className="container">
      <div className="con-head text-center">
         <h2>{WhyWorkwithUsContent.h2Header}</h2>
         <h5>{WhyWorkwithUsContent.h5Header}</h5>
      </div>
      <div className="work-life">
         <div className="row gy-5">
            {
               WhyWorkwithUsContent.ContentArray && WhyWorkwithUsContent.ContentArray.map((i)=>(

               <div className="col-lg-4 col-md-6">
                  <div className="work-life-box">
                     <img src={i.img}/>
                     <span>{i.heading}</span>
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

export default WhyWorkwithUs