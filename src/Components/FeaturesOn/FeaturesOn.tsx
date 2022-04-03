import React from 'react'
import aws from "../../Images/f-aws.png"
import microSoft from "../../Images/f-microsoft.png"
import qualitySystem from "../../Images/f-quality-system.png"
import nassCom from "../../Images/f-nasscom.png"
import isosecurity from "../../Images/f-iso-security.png"
import b2bCompanies from "../../Images/f-b2b-companies.png"


function FeaturesOn() {
  return (
    <section className="featured-on-main">
   <div className="container">
      <div className="industries-we-serve">
         <div className="row gy-5">
            <div className="col-lg-6 col-md-12">
               <div className="con-head text-left">
                  <h2>Accredited and <br/>featured on</h2>
                  <p>We are acclaimed as a premier software development company by leaders across a range of industries we have worked in. We are recognized for our strong set of values, professional team, and commitment to quality. </p>
               </div>
            </div>
            <div className="col-lg-3 col-md-6">
               <div className="featured-logo">
                  <img src={aws}/>
               </div>
            </div>
            <div className="col-lg-3 col-md-6">
               <div className="featured-logo">
                  <img src={microSoft}/>
               </div>
            </div>
            <div className="col-lg-3 col-md-6">
               <div className="featured-logo">
                  <img src={qualitySystem}/>
               </div>
            </div>
            <div className="col-lg-3 col-md-6">
               <div className="featured-logo">
                  <img src={nassCom}/>
               </div>
            </div>
            <div className="col-lg-3 col-md-6">
               <div className="featured-logo">
                  <img src={isosecurity}/>
               </div>
            </div>
            <div className="col-lg-3 col-md-6">
               <div className="featured-logo">
                  <img src={b2bCompanies}/>
               </div>
            </div>
         </div>
      </div>
   </div>   
</section>
  )
}

export default FeaturesOn