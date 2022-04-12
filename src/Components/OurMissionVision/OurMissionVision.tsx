import React from 'react'
import Mission from "../../Images/mission.jpg"
import vision from "../../Images/vision.jpg"

function OurMissionVision() {
  return (
    <section className="our-mission-vision-main">
   <div className="container">
      <div className="con-head text-center">
         <h2>Why Work With Us ?</h2>
         <h5>Our focused business strategy is designed to enhance client’s existing development <br/>methodology and improve their conventional way of business operations.</h5>
      </div>
      <div className="our-mission">
         <div className="row gy-5">
            <div className="col-lg-6 col-md-12">
               <div className="our-mission-img">
                  <img src={Mission}/>
               </div>
            </div>
            <div className="col-lg-6 col-md-12">
               <div className="our-mission-con">
                  <h3>PragetX Mission</h3>
                  <h6>You Grow, We Grow.</h6>
                  <p>Thriving to ease the workload of companies and individuals by providing cutting-edge, innovative, hassle-free software development and marketing solutions.</p>
                  <p>We want companies to not compromise on anything because of any factor but to aim for higher and better results in their development budget.</p>
               </div>
            </div>
         </div>
      </div>
      <div className="our-vision">
         <div className="row gy-5">
            <div className="col-lg-6 col-md-12">
               <div className="our-mission-con">
                  <h3>PragetX Vision</h3>
                  <p>Our vision is to empower businesses with emerging IT solutions, helping them solve their concerning problems, ease their workloads, and thrive in their digital transformation journey. This way, we can make PragetX - the best and your dream team of developers to collaborate with. </p>
               </div>
            </div>
            <div className="col-lg-6 col-md-12">
               <div className="our-mission-img">
                  <img src={vision}/>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
  )
}

export default OurMissionVision