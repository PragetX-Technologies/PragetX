import React from 'react'
import S1saasmvp from "../../Images/saas-mvp.svg"
import s2marketing from "../../Images/s2marketing.svg"
import s3webdevelopment from "../../Images/s3webdevelopment.svg"
import s7qatesting from "../../Images/qa-testing.svg"
import s6enterprisesoftware from "../../Images/s6enterprisesoftware.svg"
import s8uiuxdesign from "../../Images/s8uiuxdesign.svg"
import s4database from "../../Images/s4database.svg"
import s5mobileapp from "../../Images/s5mobileapp.svg"
import s9cloud from "../../Images/s9cloud.svg"
import salesforce from "../../Images/salesforce.svg"

function ServicesMain() {
   
   const ServiceMainContent={
      h2Header:"Services We Offer",
      h5Header:"We provide cutting edge web and mobile app solutions",
      ContentArray:[
         {
            
            odd:{  
               id:1,
               oddtm:false,
               img:S1saasmvp,
               paragraph1:"SaaS & MVP ",
               paragraph2:"Development",
               link:"",
               theme:"1"
            },
            even:{
               id:2,
               oddtm:false,
               img:s6enterprisesoftware,
               paragraph1:"Enterprise ",
               paragraph2:"Solution",
               link:"",
               theme:"2"
            },
         },{

            odd:{
               id:3,
               oddtm:true,
               img:s2marketing,
               paragraph1:"Digital",
               paragraph2:"Marketing",
               link:"",
               theme:"2"
            },
            even:{
               id:4,
               oddtm:true,
               img:s7qatesting,
               paragraph1:"QA & Testing",
               paragraph2:"",
               link:"",
               theme:"1"
            },
         },{

            odd:{
               id:5,
               oddtm:false,
               img:s3webdevelopment,
               paragraph1:"Web",
               paragraph2:"Development",
               link:"",
               theme:"1"
            },
            even:{
               id:6,
               oddtm:false,
               img:s8uiuxdesign,
               paragraph1:"UI-UX ",
               paragraph2:"Design",
               link:"",
               theme:"2"
            },
         },{

            odd:{
               id:7,
               oddtm:true,
               img:s4database,
               paragraph1:"SAP & Database ",
               paragraph2:"Management",
               link:"",
               theme:"2"
            },
            even:{
               id:8,
               oddtm:true,
               img:salesforce,
               paragraph1:"Salesforce",
               paragraph2:"",
               link:"",
               theme:"1",
            },
         },{
            odd:{
               id:9,
               oddtm:false,
               img:s5mobileapp,
               paragraph1:"Mobile App",
               paragraph2:"Development",
               link:"",
               theme:"1",
            },
            even:{
               id:10,
               oddtm:false,
               img:s9cloud,
               paragraph1:"Cloud &",
               paragraph2:"DevOps",
               link:"",
               theme:"2",
            },
         }
         ],
      CTA:"View More"
   }

  return (
   <section className="services-main">
   <div className="container">
      <div className="services-con">
         <div className="con-head text-center">
            <h2>{ServiceMainContent.h2Header}</h2>
            <h5>{ServiceMainContent.h5Header}</h5>
         </div>
         <div className="services-inner">
               {
                  ServiceMainContent.ContentArray && ServiceMainContent.ContentArray.map((i)=>(
                     <div className={i.odd.oddtm ? "service-list-box list-box-tm":"service-list-box"}>
               <div className={i.odd.theme === "1" ? "service-box1":"service-box2"}>
                  <a href={i.odd.link}>
                     <img src={i.odd.img}/>
                     <p>{i.odd.paragraph1} <br/>{i.odd.paragraph2}</p>
                  </a>
               </div>
               <div className={i.even.theme === "1" ? "service-box1":"service-box2"}>
                  <a href={i.even.link}>
                     <img src={i.even.img}/>
                     <p>{i.even.paragraph1}<br/>{i.even.paragraph2}</p>
                  </a>
               </div>
            </div>
                  ))
               }
         </div>
         <div className="service-btn">
            <a href="#" className="btn">{ServiceMainContent.CTA} <i className="fa fa-angle-right" aria-hidden="true"></i></a>
         </div>
      </div>
   </div>
</section>
  )
}

export default ServicesMain