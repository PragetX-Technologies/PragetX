import React from 'react'
import AboutImg from "../../Images/about-img.png"

function AboutUs() {
  return (
    <section className="about-us-main">
    <div className="container">
       <div className="about-con">
          <div className="row gy-5">
             <div className="col-lg-6 col-md-12">
                <div className="con-head">
                   <h2>Build Your “Pragetanam” with PragetX</h2>
                   <h5>Our IT Solutions Define Flexibility & Reliability In All Working Environments</h5>
                   <p>A team of smart and passionate leaders and adaptive software developers, working all together to deliver customized IT solutions, like web & mobile app development, cloud computing, DevOps, and Enterprise IT solutions, with precisions to meet the vision to help you build your brand credibility. </p>
                   <a href="#" className="btn">Know More <i className="fa fa-angle-right" aria-hidden="true"></i></a>
                </div>
             </div>
             <div className="col-lg-6 col-md-12">
                <div className="about-img">
                   <img src={AboutImg}/>
                </div>
             </div>
          </div>
          <div className="row gy-5 counter-number">
             <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="about-counter">
                   <div className="number-c">30+</div>
                   <div className="number-l">No. Of Project</div>
                </div>
             </div>
             <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="about-counter">
                   <div className="number-c">35+</div>
                   <div className="number-l">No. Of Clients</div>
                </div>
             </div>
             <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="about-counter">
                   <div className="number-c">50+</div>
                   <div className="number-l">countries we serve</div>
                </div>
             </div>
             <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="about-counter">
                   <div className="number-c">42+</div>
                   <div className="number-l">companys we work with</div>
                </div>
             </div>
             <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="about-counter">
                   <div className="number-c">30+</div>
                   <div className="number-l">IT Professional</div>
                </div>
             </div>
             <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="about-counter">
                   <div className="number-c">10+</div>
                   <div className="number-l">New Clients</div>
                </div>
             </div>
          </div>
       </div>
    </div>
 </section>
  )
}

export default AboutUs