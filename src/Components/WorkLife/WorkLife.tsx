import React from 'react'
import Img1 from "../../Images/work-ic1.png"
import Img2 from "../../Images/work-ic2.png"
import Img3 from "../../Images/work-ic3.png"
import Img4 from "../../Images/work-ic4.png"
import Img5 from "../../Images/work-ic5.png"
import Img6 from "../../Images/work-ic6.png"
import Img7 from "../../Images/work-ic7.png"
import Img8 from "../../Images/work-ic8.png"

function WorkLife() {
   const WorkLifeContent = {
      h2Header:"Work Life Its Best",
      h5Header:"We provide cutting edge web and mobile app solutions",
      ContentArray:[
         {
            img:Img1,
            line1:"Learning",
            line2:"& Development"
         },
         {
            img:Img2,
            line1:"Mindful",
            line2:"Personal Guidance"
         },
         {
            img:Img3,
            line1:"Constructive",
            line2:"Feedback"
         },
         {
            img:Img4,
            line1:"Inclusive",
            line2:"Open-Culture"
         },
         {
            img:Img5,
            line1:"Innovation",
            line2:"& Quality First"
         },
         {
            img:Img6,
            line1:"Proactive",
            line2:"Implementation",
         },
         {
            img:Img7,
            line1:"Best & Global",
            line2:"Opportunities",
         },
         {
            img:Img8,
            line1:"Work with",
            line2:"Latest Technology",
         },
      ]
   }
  return (
    <section className="work-life-main">
    <div className="container">
       <div className="con-head text-center">
          <h2>{WorkLifeContent.h2Header}</h2>
          <h5>{WorkLifeContent.h5Header}</h5>
       </div>
       <div className="work-life">
          <div className="row gy-5">
             {
                WorkLifeContent.ContentArray && WorkLifeContent.ContentArray.map((i)=>(
                  <div className="col-lg-4 col-md-6">
                     <div className="work-life-box">
                        <img src={i.img}/>
                        <span>{i.line1}<br/>{i.line2}</span>
                     </div>
                  </div>
                ))}
          </div>
       </div>
    </div>
 </section>

  )
}

export default WorkLife