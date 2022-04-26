import React from 'react'
import img1 from "../../Images/industries-img1.jpg"
import img2 from "../../Images/industries-img2.jpg"
import img3 from "../../Images/industries-img3.jpg"
import img4 from "../../Images/industries-img4.jpg"
import img5 from "../../Images/industries-img5.jpg"
import img6 from "../../Images/industries-img6.jpg"
import img7 from "../../Images/industries-img7.jpg"
import img8 from "../../Images/industries-img8.jpg"
import img9 from "../../Images/industries-img9.jpg"
import img10 from "../../Images/industries-img10.jpg"
import img11 from "../../Images/industries-img11.jpg"
import img12 from "../../Images/industries-img12.jpg"


function IndustriesWeServe() {

   const IndustriesWeServeContent = {
      h2Header: "Industries We Serve",
      h5Header: "The aim of PragetX to digitally transform the business is not limited any certain industry.",
      tabData: [{
         id: 1,
         img: img1,
         heading: "Government & Public Sector",
         paragraph: "Building IT solutions by understanding the data-confidentiality needs that any government & public sector would need to function efficiently with hassle-free digital service experiences.",
         CTA: "Explore"
      }, {
         id: 2,
         img: img2,
         heading: "Banking & Finance",
         paragraph: "Providing banking and financial sectors with powerful computational IT solutions in compliance with the government body, providing users with faster, reliable, and precise operation experiences ",
         CTA: "Explore"
      }, {
         id: 3,
         img: img3,
         heading: "Manufacturing",
         paragraph: "Implementing the streamlined and well-programmed industry automation solutions that can help them roll out the targeted production mark and lead the sector. ",
         CTA: "Explore"
      },
      {
         id: 4,
         img: img4,
         heading: "Education",
         paragraph: "Helping educational organizations store and manage the students' essential data effectively by providing software solutions with cybersecurity modules.  ",
         CTA: "Explore"
      },
      {
         id: 5,
         img: img5,
         heading: "Media & Entertainment",
         paragraph: "Ensuring the non-stop streaming with live data updates with online streaming solutions made in MEAN/MERN stack that are all device friendly and easy to maintain",
         CTA: "Explore"
      },
      {
         id: 6,
         img: img6,
         heading: "Supply Chain",
         paragraph: "Providing a range of on-demand, cloud IT solutions with real-time tracking enablement that a supply chain sector needs to function effortlessly.",
         CTA: "Explore",
      },
      {
         id: 7,
         img: img7,
         heading: "Health Care",
         paragraph: "Building on-demand healthcare IT solutions in compliance with HIPAA that can help healthcare entities shift and manage their work digitally.",
         CTA: "Explore",
      },
      {
         id: 8,
         img: img8,
         heading: "Startup",
         paragraph: "No matter to which industry your startup belongs to, we at PragetX have industry-friendly IT solutions that are in compliance with the respective industry regulations.",
         CTA: "Explore",
      },
      {
         id: 9,
         img: img9,
         heading: "Real Estate & Construction",
         paragraph: "We are acclaimed as a premier software development company by leaders across a range of industries we have worked in. We are recognized for our strong set of values, professional team, and commitment to quality.",
         CTA: "Explore",
      },
      {
         id: 10,
         img: img10,
         heading: "FMCG",
         paragraph: "We are acclaimed as a premier software development company by leaders across a range of industries we have worked in. We are recognized for our strong set of values, professional team, and commitment to quality.",
         CTA: "Explore",
      },
      {
         id: 11,
         img: img11,
         heading: "Oil & Gas",
         paragraph: "We are acclaimed as a premier software development company by leaders across a range of industries we have worked in. We are recognized for our strong set of values, professional team, and commitment to quality.",
         CTA: "Explore",
      },
      {
         id: 12,
         img: img12,
         heading: "Insurance",
         paragraph: "We are acclaimed as a premier software development company by leaders across a range of industries we have worked in. We are recognized for our strong set of values, professional team, and commitment to quality. ",
         CTA: "Explore",
      },
      ],
   }

   return (
      <section className="industries-we-serve-main">
         <div className="container">
            <div className="con-head text-center">
               <h2>{IndustriesWeServeContent.h2Header}</h2>
               <h5>{IndustriesWeServeContent.h5Header}</h5>
            </div>
            <div className="industries-we-serve">
               <div className="row gy-5">
                  <div className="col-lg-4 col-md-12">
                     <ul className="nav nav-tabs" id="myTab1" role="tablist">
                        {
                           IndustriesWeServeContent.tabData && IndustriesWeServeContent.tabData.map((i) => (
                              <li className="nav-item" role="presentation">
                                 <button className={i.id == 1 ? "nav-link active" : "nav-link"} id={`serve-tab${i.id}`} data-bs-toggle="tab" data-bs-target={`#serve${i.id}`} type="button" role="tab" aria-controls="serve1" aria-selected="true">{i.heading}</button>
                              </li>

                           ))
                        }
                     </ul>
                  </div>
                  <div className="col-lg-8 col-md-12">
                     <div className="tab-content" id="myTabContent1">
                        {
                           IndustriesWeServeContent.tabData && IndustriesWeServeContent.tabData.map((i) => (

                              <div className={i.id === 1 ? "tab-pane fade show active" : "tab-pane fade"} id={`serve${i.id}`} role="tabpanel" aria-labelledby={`serve-tab${i.id}`}>
                                 <div className="industries-serve-box" style={{ background: "url(" + i.img + ")", }} >
                                    <div className="serve-box-con">
                                       <h3>{i.heading}</h3>
                                       <p>{i.paragraph}</p>
                                       <a href="#" className="btn">{i.CTA} <i className="fa fa-angle-right" aria-hidden="true"></i></a>
                                    </div>
                                 </div>
                              </div>

                           ))
                        }
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default IndustriesWeServe