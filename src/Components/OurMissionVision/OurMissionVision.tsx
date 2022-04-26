import React from 'react'
import Mission from "../../Images/mission.jpg"
import vision from "../../Images/vision.jpg"

function OurMissionVision() {
   const OurMissionVisionContent ={
      h2Header:"Why Work With Us ?",
      h5HeaderLine1:"Our focused business strategy is designed to enhance client’s existing development ",
      h5HeaderLine2:"methodology and improve their conventional way of business operations.",
      missionHeader:"PragetX Mission",
      visionHeader:"PragetX Vision",
      h6MissionHeader:"You Grow, We Grow.",
      MissionParagraph1:"Thriving to ease the workload of companies and individuals by providing cutting-edge, innovative, hassle-free software development and marketing solutions.",
      MissionParagraph2:"We want companies to not compromise on anything because of any factor but to aim for higher and better results in their development budget.",
      missiononParagraph:"",
      visionParagraph:"Our vision is to empower businesses with emerging IT solutions, helping them solve their concerning problems, ease their workloads, and thrive in their digital transformation journey. This way, we can make PragetX - the best and your dream team of developers to collaborate with. ",


   }
  return (
    <section className="our-mission-vision-main">
   <div className="container">
      <div className="con-head text-center">
         <h2>{OurMissionVisionContent.h2Header}</h2>
         <h5>{OurMissionVisionContent.h5HeaderLine1} <br/>{OurMissionVisionContent.h5HeaderLine2}</h5>
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
                  <h3>{OurMissionVisionContent.missionHeader}</h3>
                  <h6>{OurMissionVisionContent.h6MissionHeader}</h6>
                  <p>{OurMissionVisionContent.MissionParagraph1}</p>
                  <p>{OurMissionVisionContent.MissionParagraph2}</p>
               </div>
            </div>
         </div>
      </div>
      <div className="our-vision">
         <div className="row gy-5">
            <div className="col-lg-6 col-md-12">
               <div className="our-mission-con">
                  <h3>{OurMissionVisionContent.visionHeader}</h3>
                  <p>{OurMissionVisionContent.visionParagraph}</p>
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