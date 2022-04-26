import React from 'react'
import AboutImg from "../../Images/about-img.png"
import CountUp from 'react-countup';
import ReactVisibilitySensor from 'react-visibility-sensor';

function AboutUs() {

   const AboutUsVarient1Content = {
      title: "Build Your Company's 'pragetanam' with PragetX",
      tagline: "Our IT Solutions Define Flexibility & Reliability In All Working Environments",
      paragraph: "A team of smart and passionate leaders and adaptive software developers, working all together to deliver customized IT solutions, like web & mobile app development, cloud computing, DevOps, and Enterprise IT solutions, with precisions to meet the vision to help you build your brand credibility.",
      CTA: "Learn More",
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
      <section className="about-us-main">
         <div className="container">
            <div className="about-con">
               <div className="row gy-5">
                  <div className="col-lg-6 col-md-12">
                     <div className="con-head">
                        <h2>{AboutUsVarient1Content.title}</h2>
                        <h5>{AboutUsVarient1Content.tagline}</h5>
                        <p>{AboutUsVarient1Content.paragraph}</p>
                        <a href="#" className="btn">{AboutUsVarient1Content.CTA} <i className="fa fa-angle-right" aria-hidden="true"></i></a>
                     </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                     <div className="about-img">
                        <img src={AboutImg} />
                     </div>
                  </div>
               </div>
               <div className="row gy-5 counter-number">
                  {
                     AboutUsVarient1Content.stats && AboutUsVarient1Content.stats.map((i) => (
                        <div className="col-lg-4 col-md-6 col-sm-12">
                           <div className="about-counter">
                              <div className="number-c">
                                 <CountUp end={i.number} redraw={true}>
                                    {({ countUpRef, start }) => (
                                       <ReactVisibilitySensor onChange={start} delayedCall>
                                          <span ref={countUpRef} />
                                       </ReactVisibilitySensor>
                                    )}
                                 </CountUp>{i.field === 'Lines of Code' ? "K+" : "+"}
                              </div>
                              <div className="number-l">{i.field}</div>
                           </div>
                        </div>
                     ))
                  }
               </div>
            </div>
         </div>
      </section>
   )
}

export default AboutUs