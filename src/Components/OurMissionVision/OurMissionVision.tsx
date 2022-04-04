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
                  <h6>Our Aim is: You Grow, We Grow.</h6>
                  <p>Thriving to ease the workload of companies and individuals by providing cutting-edge, innovative and creative, hassle-free software developement and marketing solutions.</p>
                  <h5>We want compines not to compromise their development budget by hiring freelancers even while outsourcing.</h5>
               </div>
            </div>
         </div>
      </div>
      <div className="our-vision">
         <div className="row gy-5">
            <div className="col-lg-6 col-md-12">
               <div className="our-mission-con">
                  <h3>PragetX Vision</h3>
                  <p>Our vision is to develop next generation products and service platforms using emerging technologies like AI, ML, Big Data, IoT, VR, AR, Blockchain, NFT and much more, by solving problems to make people and companies lives easier, more productive and much more meaningful than ever before. </p>
                  <p>Our goal is to help businesses grow through the lens of best management and team of developers one can dream of. Want to make PragetX, a best place to work with best culture one should have.</p>
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