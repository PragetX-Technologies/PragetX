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
  return (
   <section className="services-main">
   <div className="container">
      <div className="services-con">
         <div className="con-head text-center">
            <h2>Services We Offer</h2>
            <h5>We provide cutting edge web and mobile app solutions</h5>
         </div>
         <div className="services-inner">
            <div className="service-list-box">
               <div className="service-box1">
                  <a href="#">
                     <img src={S1saasmvp}/>
                     <p>SaaS & MVP <br/>Development</p>
                  </a>
               </div>
               <div className="service-box2">
                  <a href="#">
                     <img src={s6enterprisesoftware}/>
                     <p>Enterprise <br/>Solution</p>
                  </a>
               </div>
            </div>
            <div className="service-list-box list-box-tm">
               <div className="service-box2">
                  <a href="#">
                     <img src={s2marketing}/>
                     <p>Digital <br/>Marketing</p>
                  </a>
               </div>
               <div className="service-box1">
                  <a href="#">
                     <img src={s7qatesting}/>
                     <p>QA & Testing</p>
                  </a>
               </div>
            </div>
            <div className="service-list-box">
               <div className="service-box1">
                  <a href="#">
                     <img src={s3webdevelopment}/>
                     <p>Web <br/>Development</p>
                  </a>
               </div>
               <div className="service-box2">
                  <a href="#">
                     <img src={s8uiuxdesign}/>
                     <p>UI-UX Design</p>
                  </a>
               </div>
            </div>
            <div className="service-list-box list-box-tm">
               <div className="service-box2">
                  <a href="#">
                     <img src={s4database}/>
                     <p>SAP & Database <br/>Management</p>
                  </a>
               </div>
               <div className="service-box1">
                  <a href="#">
                     <img src={salesforce}/>
                     <p>Salesforce</p>
                  </a>
               </div>
            </div>
            <div className="service-list-box">
               <div className="service-box1">
                  <a href="#">
                     <img src={s5mobileapp}/>
                     <p>Mobile App <br/>Development</p>
                  </a>
               </div>
               <div className="service-box2">
                  <a href="#">
                     <img src={s9cloud}/>
                     <p>Cloud & DevOps</p>
                  </a>
               </div>
            </div>
         </div>
         <div className="service-btn">
            <a href="#" className="btn">View More <i className="fa fa-angle-right" aria-hidden="true"></i></a>
         </div>
      </div>
   </div>
</section>
  )
}

export default ServicesMain