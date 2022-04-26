import React from 'react'
import AboutImg from "../../Images/about-img.png"
import CountUp from 'react-countup';
import ReactVisibilitySensor from 'react-visibility-sensor';


function AboutUsCon() {
   const AboutUsVarient2Content ={
      title:"Build Your Pragetanam with Us.",
      tagline:"We provide cutting edge web and mobile app solutions",
      paragraph:"Team of creative developers, smart leaders, digital content creators, brand marketers, working together to provide all types of software and marketing related services to help build your company’s pragetanam with us.",
      CTA:"Learn More",
      stats: [{
         number: 35,
         field: 'No. of Projects'
      }, {
         number: 20,
         field: 'No. of Clients'
      }, {
         number: 7,
         field: 'Countries we serve'
      }, {
         number: 10,
         field: 'Dedicated Resources Aligned'
      }, {
         number: 30,
         field: 'IT Professionals'
      }, {
         number: 530,
         field: 'Lines of Code'
      }]
   }

   return (
      <section className="about-us-main about-stat-main apb-1">
         <div className="container-fluid">
            <div className="about-con">
               <div className="row gy-5">
                  <div className="col-lg-6 col-md-12">
                     <div className="about-img">
                        <img src={AboutImg} />
                     </div>
                  </div>
                  <div className="col-lg-6 col-md-12 text-center">
                     <div className="con-head">
                        <h2>{AboutUsVarient2Content.title}</h2>
                        <h5>{AboutUsVarient2Content.tagline}</h5>
                        <p>{AboutUsVarient2Content.paragraph}</p>
                        <a href="#" className="btn">{AboutUsVarient2Content.CTA}<i className="fa fa-angle-right" aria-hidden="true"></i></a>
                     </div>
                     <div className="about-stat">
                        <div className="row gy-5 counter-number">
                           {
                              AboutUsVarient2Content?.stats && AboutUsVarient2Content?.stats.map((i) => (
                                 <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="about-counter">
                                       <div className="number-c">
                                          <CountUp end={i.number} redraw={true}>
                                             {({ countUpRef, start }) => (
                                                <ReactVisibilitySensor onChange={start} delayedCall>
                                                   <span ref={countUpRef} />
                                                </ReactVisibilitySensor>
                                             )}
                                          </CountUp>+
                                       </div>
                                       <div className="number-l">{i.field}</div>
                                    </div>
                                 </div>
                              ))}
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