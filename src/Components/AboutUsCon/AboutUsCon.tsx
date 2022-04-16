import React from 'react'
import AboutImg from "../../Images/about-img.png"

function AboutUsCon() {
  return (
    <section className="about-us-main about-stat-main apb-1">
    <div className="container-fluid">
       <div className="about-con">
          <div className="row gy-5">
             <div className="col-lg-6 col-md-12">
                <div className="about-img">
                   <img src={AboutImg}/>
                </div>
             </div>
             <div className="col-lg-6 col-md-12 text-center">
                <div className="con-head">
                   <h2>Build Your Pragetanam with Us.</h2>
                   <h5>We provide cutting edge web and mobile app solutions</h5>
                   <p>Team of creative developers, smart leaders, digital content creators, brand marketers, working together to provide all types of software and marketing related services to help build your company’s pragetanam with us.</p>
                   <a href="#" className="btn">Learn More <i className="fa fa-angle-right" aria-hidden="true"></i></a>
                </div>
                <div className="about-stat">
                   <div className="row gy-5 counter-number">
                      <div className="col-lg-4 col-md-6 col-sm-12">
                         <div className="about-counter">
                            <div className="number-c">35+</div>
                            <div className="number-l">No. Of Projects</div>
                         </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12">
                         <div className="about-counter">
                            <div className="number-c">20+</div>
                            <div className="number-l">No. Of Clients</div>
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
                            <div className="number-l">lines of code written till now</div>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </div>
 </section>
  )
}

export default AboutUsCon