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
  return (
    <section className="industries-we-serve-main">
    <div className="container">
       <div className="con-head text-center">
          <h2>Industries We Serve</h2>
          <h5>The aim of PragetX to digitally transform the business is not limited any certain industry. </h5>
       </div>
       <div className="industries-we-serve">
          <div className="row gy-5">
             <div className="col-lg-4 col-md-12">
                <ul className="nav nav-tabs" id="myTab1" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="serve-tab1" data-bs-toggle="tab" data-bs-target="#serve1" type="button" role="tab" aria-controls="serve1" aria-selected="true">Government & Public Sector</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="serve-tab3" data-bs-toggle="tab" data-bs-target="#serve3" type="button" role="tab" aria-controls="serve3" aria-selected="false">Banking & Finance</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="serve-tab4" data-bs-toggle="tab" data-bs-target="#serve4" type="button" role="tab" aria-controls="serve4" aria-selected="false">Manufacturing</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="serve-tab5" data-bs-toggle="tab" data-bs-target="#serve5" type="button" role="tab" aria-controls="serve5" aria-selected="false">Education</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="serve-tab6" data-bs-toggle="tab" data-bs-target="#serve6" type="button" role="tab" aria-controls="serve6" aria-selected="false">Media & Entertainment</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="serve-tab7" data-bs-toggle="tab" data-bs-target="#serve7" type="button" role="tab" aria-controls="serve7" aria-selected="false">Supply Chain</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="serve-tab8" data-bs-toggle="tab" data-bs-target="#serve8" type="button" role="tab" aria-controls="serve8" aria-selected="false">Health Care</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="serve-tab9" data-bs-toggle="tab" data-bs-target="#serve9" type="button" role="tab" aria-controls="serve9" aria-selected="false">Startup</button>
                  </li>
                 <li className="nav-item" role="presentation">
                   <button className="nav-link" id="serve-tab10" data-bs-toggle="tab" data-bs-target="#serve10" type="button" role="tab" aria-controls="serve10" aria-selected="false">FMCG</button>
                 </li>
                 <li className="nav-item" role="presentation">
                   <button className="nav-link" id="serve-tab11" data-bs-toggle="tab" data-bs-target="#serve11" type="button" role="tab" aria-controls="serve11" aria-selected="false">Oil & Gas</button>
                 </li>
                 <li className="nav-item" role="presentation">
                   <button className="nav-link" id="serve-tab12" data-bs-toggle="tab" data-bs-target="#serve12" type="button" role="tab" aria-controls="serve12" aria-selected="false">Insurance</button>
                 </li>
                </ul>
             </div>
             <div className="col-lg-8 col-md-12">
                <div className="tab-content" id="myTabContent1">
                  <div className="tab-pane fade show active" id="serve1" role="tabpanel" aria-labelledby="serve-tab1">
                      <div className="industries-serve-box" style={{background: "url(" + img1 + ")",}} >
                         <div className="serve-box-con">
                            <h3>Government & Public Sector</h3>
                            <p>Building IT solutions by understanding the data-confidentiality needs that any government & public sector would need to function efficiently with hassle-free digital service experiences.</p>
                            <a href="#" className="btn">Explore <i className="fa fa-angle-right" aria-hidden="true"></i></a>
                         </div>
                      </div>
                  </div>
                  <div className="tab-pane fade" id="serve3" role="tabpanel" aria-labelledby="serve-tab3">
                      <div className="industries-serve-box" style={{background: "url(" + img2 + ")",}}>
                         <div className="serve-box-con">
                            <h3>Banking & Finance</h3>
                            <p>Providing banking and financial sectors with powerful computational IT solutions in compliance with the government body, providing users with faster, reliable, and precise operation experiences </p>
                            <a href="#" className="btn">Explore <i className="fa fa-angle-right" aria-hidden="true"></i></a>
                         </div>
                      </div>
                  </div>
                  <div className="tab-pane fade" id="serve4" role="tabpanel" aria-labelledby="serve-tab4">
                      <div className="industries-serve-box" style={{background: "url(" + img3 + ")",}}>
                         <div className="serve-box-con">
                            <h3>Manufacturing</h3>
                            <p>Implementing the streamlined and well-programmed industry automation solutions that can help them roll out the targeted production mark and lead the sector. </p>
                            <a href="#" className="btn">Explore <i className="fa fa-angle-right" aria-hidden="true"></i></a>
                         </div>
                      </div>
                  </div>
                  <div className="tab-pane fade" id="serve5" role="tabpanel" aria-labelledby="serve-tab5">
                      <div className="industries-serve-box"style={{background: "url(" + img4 + ")",}}>
                         <div className="serve-box-con">
                            <h3>Education</h3>
                            <p>Helping educational organizations store and manage the students' essential data effectively by providing software solutions with cybersecurity modules. </p>
                            <a href="#" className="btn">Explore <i className="fa fa-angle-right" aria-hidden="true"></i></a>
                         </div>
                      </div>
                  </div>
                  <div className="tab-pane fade" id="serve6" role="tabpanel" aria-labelledby="serve-tab6">
                      <div className="industries-serve-box" style={{background: "url(" + img5 + ")",}}>
                         <div className="serve-box-con">
                            <h3>Media & Entertainment</h3>
                            <p>Ensuring the non-stop streaming with live data updates with online streaming solutions made in MEAN/MERN stack that are all device friendly and easy to maintain </p>
                            <a href="#" className="btn">Explore <i className="fa fa-angle-right" aria-hidden="true"></i></a>
                         </div>
                      </div>
                  </div>
                  <div className="tab-pane fade" id="serve7" role="tabpanel" aria-labelledby="serve-tab7">
                      <div className="industries-serve-box" style={{background: "url(" + img6 + ")",}}>
                         <div className="serve-box-con">
                            <h3>Supply Chain</h3>
                            <p>Providing a range of on-demand, cloud IT solutions with real-time tracking enablement that a supply chain sector needs to function effortlessly.
                           </p>
                            <a href="#" className="btn">Explore <i className="fa fa-angle-right" aria-hidden="true"></i></a>
                         </div>
                      </div>
                  </div>
                  <div className="tab-pane fade" id="serve8" role="tabpanel" aria-labelledby="serve-tab8">
                      <div className="industries-serve-box" style={{background: "url(" + img7 + ")",}}>
                         <div className="serve-box-con">
                            <h3>Health Care</h3>
                            <p>Building on-demand healthcare IT solutions in compliance with HIPAA that can help healthcare entities shift and manage their work digitally.
 </p>
                            <a href="#" className="btn">Explore <i className="fa fa-angle-right" aria-hidden="true"></i></a>
                         </div>
                      </div>
                  </div>
                  <div className="tab-pane fade" id="serve9" role="tabpanel" aria-labelledby="serve-tab9">
                      <div className="industries-serve-box" style={{background: "url(" + img8 + ")",}}>
                         <div className="serve-box-con">
                            <h3>Startup</h3>
                            <p>No matter to which industry your startup belongs to, we at PragetX have industry-friendly IT solutions that are in compliance with the respective industry regulations.
                            </p>
                            <a href="#" className="btn">Explore <i className="fa fa-angle-right" aria-hidden="true"></i></a>
                         </div>
                      </div>
                  </div>
                  <div className="tab-pane fade" id="serve9" role="tabpanel" aria-labelledby="serve-tab9">
                     <div className="industries-serve-box" style={{background: "url(" + img9 + ")",}}>
                        <div className="serve-box-con">
                           <h3>Real Estate & Construction</h3>
                           <p>We are acclaimed as a premier software development company by leaders across a range of industries we have worked in. We are recognized for our strong set of values, professional team, and commitment to quality. </p>
                           <a href="#" className="btn">Explore <i className="fa fa-angle-right" aria-hidden="true"></i></a>
                        </div>
                     </div>
                 </div>
                 <div className="tab-pane fade" id="serve10" role="tabpanel" aria-labelledby="serve-tab10">
                     <div className="industries-serve-box" style={{background: "url(" + img10 + ")",}}>
                        <div className="serve-box-con">
                           <h3>FMCG</h3>
                           <p>We are acclaimed as a premier software development company by leaders across a range of industries we have worked in. We are recognized for our strong set of values, professional team, and commitment to quality. </p>
                           <a href="#" className="btn">Explore <i className="fa fa-angle-right" aria-hidden="true"></i></a>
                        </div>
                     </div>
                 </div>
                 <div className="tab-pane fade" id="serve11" role="tabpanel" aria-labelledby="serve-tab11">
                     <div className="industries-serve-box" style={{background: "url(" + img11 + ")",}}>
                        <div className="serve-box-con">
                           <h3>Oil & Gas</h3>
                           <p>We are acclaimed as a premier software development company by leaders across a range of industries we have worked in. We are recognized for our strong set of values, professional team, and commitment to quality. </p>
                           <a href="#" className="btn">Explore <i className="fa fa-angle-right" aria-hidden="true"></i></a>
                        </div>
                     </div>
                 </div>
                 <div className="tab-pane fade" id="serve12" role="tabpanel" aria-labelledby="serve-tab12">
                     <div className="industries-serve-box" style={{background: "url(" + img12 + ")",}}>
                        <div className="serve-box-con">
                           <h3>Insurance</h3>
                           <p>We are acclaimed as a premier software development company by leaders across a range of industries we have worked in. We are recognized for our strong set of values, professional team, and commitment to quality. </p>
                           <a href="#" className="btn">Explore <i className="fa fa-angle-right" aria-hidden="true"></i></a>
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

export default IndustriesWeServe