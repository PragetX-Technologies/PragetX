import React from 'react'
import img from "../../Images/industries-img1.jpg"
import img2 from "../../Images/industries-img2.jpg"

function IndustriesWeServe() {
  return (
    <section className="industries-we-serve-main">
    <div className="container">
       <div className="con-head text-center">
          <h2>Industries We Serve</h2>
          <h5>We provide cutting edge web and mobile app solutions</h5>
       </div>
       <div className="industries-we-serve">
          <div className="row gy-5">
             <div className="col-lg-4 col-md-12">
                <ul className="nav nav-tabs" id="myTab1" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="serve-tab1" data-bs-toggle="tab" data-bs-target="#serve1" type="button" role="tab" aria-controls="serve1" aria-selected="true">Government</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="serve-tab2" data-bs-toggle="tab" data-bs-target="#serve2" type="button" role="tab" aria-controls="serve2" aria-selected="false">Legal Firms</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="serve-tab3" data-bs-toggle="tab" data-bs-target="#serve3" type="button" role="tab" aria-controls="serve3" aria-selected="false">Finance</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="serve-tab4" data-bs-toggle="tab" data-bs-target="#serve4" type="button" role="tab" aria-controls="serve4" aria-selected="false">Manufacturing</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="serve-tab5" data-bs-toggle="tab" data-bs-target="#serve5" type="button" role="tab" aria-controls="serve5" aria-selected="false">Education</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="serve-tab6" data-bs-toggle="tab" data-bs-target="#serve6" type="button" role="tab" aria-controls="serve6" aria-selected="false">Communication</button>
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
                    <button className="nav-link" id="serve-tab10" data-bs-toggle="tab" data-bs-target="#serve10" type="button" role="tab" aria-controls="serve10" aria-selected="false">Insurance</button>
                  </li>
                </ul>
             </div>
             <div className="col-lg-8 col-md-12">
                <div className="tab-content" id="myTabContent1">
                  <div className="tab-pane fade show active" id="serve1" role="tabpanel" aria-labelledby="serve-tab1">
                      <div className="industries-serve-box" style={{background: "url(" + img + ")",}} >
                         <div className="serve-box-con">
                            <h3>Government</h3>
                            <p>We are acclaimed as a premier software development company by leaders across a range of industries we have worked in. We are recognized for our strong set of values, professional team, and commitment to quality. </p>
                            <a href="#" className="btn">Explore <i className="fa fa-angle-right" aria-hidden="true"></i></a>
                         </div>
                      </div>
                  </div>
                  <div className="tab-pane fade" id="serve2" role="tabpanel" aria-labelledby="serve-tab2">
                      <div className="industries-serve-box" style={{background: "url(" + img + ")",}}>
                         <div className="serve-box-con">
                            <h3>Legal Firms</h3>
                            <p>We are acclaimed as a premier software development company by leaders across a range of industries we have worked in. We are recognized for our strong set of values, professional team, and commitment to quality. </p>
                            <a href="#" className="btn">Explore <i className="fa fa-angle-right" aria-hidden="true"></i></a>
                         </div>
                      </div>
                  </div>
                  <div className="tab-pane fade" id="serve3" role="tabpanel" aria-labelledby="serve-tab3">
                      <div className="industries-serve-box" style={{background: "url(" + img + ")",}}>
                         <div className="serve-box-con">
                            <h3>Finance</h3>
                            <p>We are acclaimed as a premier software development company by leaders across a range of industries we have worked in. We are recognized for our strong set of values, professional team, and commitment to quality. </p>
                            <a href="#" className="btn">Explore <i className="fa fa-angle-right" aria-hidden="true"></i></a>
                         </div>
                      </div>
                  </div>
                  <div className="tab-pane fade" id="serve4" role="tabpanel" aria-labelledby="serve-tab4">
                      <div className="industries-serve-box" style={{background: "url(" + img + ")",}}>
                         <div className="serve-box-con">
                            <h3>Manufacturing</h3>
                            <p>We are acclaimed as a premier software development company by leaders across a range of industries we have worked in. We are recognized for our strong set of values, professional team, and commitment to quality. </p>
                            <a href="#" className="btn">Explore <i className="fa fa-angle-right" aria-hidden="true"></i></a>
                         </div>
                      </div>
                  </div>
                  <div className="tab-pane fade" id="serve5" role="tabpanel" aria-labelledby="serve-tab5">
                      <div className="industries-serve-box"style={{background: "url(" + img + ")",}}>
                         <div className="serve-box-con">
                            <h3>Education</h3>
                            <p>We are acclaimed as a premier software development company by leaders across a range of industries we have worked in. We are recognized for our strong set of values, professional team, and commitment to quality. </p>
                            <a href="#" className="btn">Explore <i className="fa fa-angle-right" aria-hidden="true"></i></a>
                         </div>
                      </div>
                  </div>
                  <div className="tab-pane fade" id="serve6" role="tabpanel" aria-labelledby="serve-tab6">
                      <div className="industries-serve-box" style={{background: "url(" + img + ")",}}>
                         <div className="serve-box-con">
                            <h3>Communication</h3>
                            <p>We are acclaimed as a premier software development company by leaders across a range of industries we have worked in. We are recognized for our strong set of values, professional team, and commitment to quality. </p>
                            <a href="#" className="btn">Explore <i className="fa fa-angle-right" aria-hidden="true"></i></a>
                         </div>
                      </div>
                  </div>
                  <div className="tab-pane fade" id="serve7" role="tabpanel" aria-labelledby="serve-tab7">
                      <div className="industries-serve-box" style={{background: "url(" + img + ")",}}>
                         <div className="serve-box-con">
                            <h3>Supply Chain</h3>
                            <p>We are acclaimed as a premier software development company by leaders across a range of industries we have worked in. We are recognized for our strong set of values, professional team, and commitment to quality. </p>
                            <a href="#" className="btn">Explore <i className="fa fa-angle-right" aria-hidden="true"></i></a>
                         </div>
                      </div>
                  </div>
                  <div className="tab-pane fade" id="serve8" role="tabpanel" aria-labelledby="serve-tab8">
                      <div className="industries-serve-box" style={{background: "url(" + img + ")",}}>
                         <div className="serve-box-con">
                            <h3>Health Care</h3>
                            <p>We are acclaimed as a premier software development company by leaders across a range of industries we have worked in. We are recognized for our strong set of values, professional team, and commitment to quality. </p>
                            <a href="#" className="btn">Explore <i className="fa fa-angle-right" aria-hidden="true"></i></a>
                         </div>
                      </div>
                  </div>
                  <div className="tab-pane fade" id="serve9" role="tabpanel" aria-labelledby="serve-tab9">
                      <div className="industries-serve-box" style={{background: "url(" + img + ")",}}>
                         <div className="serve-box-con">
                            <h3>Startup</h3>
                            <p>We are acclaimed as a premier software development company by leaders across a range of industries we have worked in. We are recognized for our strong set of values, professional team, and commitment to quality. </p>
                            <a href="#" className="btn">Explore <i className="fa fa-angle-right" aria-hidden="true"></i></a>
                         </div>
                      </div>
                  </div>
                  <div className="tab-pane fade" id="serve10" role="tabpanel" aria-labelledby="serve-tab10">
                      <div className="industries-serve-box" style={{background: "url(" + img + ")",}}>
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