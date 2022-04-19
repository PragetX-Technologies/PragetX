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
                   <h2>Build Your Company's 'pragetanam' with PragetX</h2>
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
                   <div className="number-c">35+</div>
                   <div className="number-l">No. of Project</div>
                </div>
             </div>
             <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="about-counter">
                   <div className="number-c">20+</div>
                   <div className="number-l">No. of Clients</div>
                </div>
             </div>
             <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="about-counter">
                   <div className="number-c">7+</div>
                   <div className="number-l">Countries we serve</div>
                </div>
             </div>
             <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="about-counter">
                   <div className="number-c">10+</div>
                   <div className="number-l">Dedicated Resources Aligned</div>
                </div>
             </div>
             <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="about-counter">
                   <div className="number-c">30+</div>
                   <div className="number-l">IT Professionals</div>
                </div>
             </div>
             <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="about-counter">
                   <div className="number-c">530K+</div>
                   <div className="number-l">Lines of Code</div>
                </div>
             </div>
          </div>
       </div>
    </div>
 </section>
  )
}

export default AboutUs