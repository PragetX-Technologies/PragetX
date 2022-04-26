import React from 'react'
import aws from "../../Images/f-aws.png"
import microSoft from "../../Images/f-microsoft.png"
import qualitySystem from "../../Images/f-quality-system.png"
import nassCom from "../../Images/f-nasscom.png"
import isosecurity from "../../Images/f-iso-security.png"
import b2bCompanies from "../../Images/f-b2b-companies.png"


function FeaturesOn() {
   const FeaturesOnContent = {
      h2HeaderLine1: "PragetX Wall of ",
      h2HeaderLine2: "Recognitions",
      paragraph: "Since the foundation, we have helped 45+ global brands to achieve their business objectives with our creative approach and tailored IT solutions.",
      ContentArray: [{
         img: aws
      },
      {
         img: microSoft
      },
      {
         img: nassCom
      },
      {
         img: qualitySystem
      },
      {
         img: isosecurity
      },
      {
         img: b2bCompanies
      }]
   }

   return (
      <section className="featured-on-main">
         <div className="container">
            <div className="industries-we-serve">
               <div className="row gy-5">
                  <div className="col-lg-6 col-md-12">
                     <div className="con-head text-left">
                        <h2>{FeaturesOnContent.h2HeaderLine1} <br />{FeaturesOnContent.h2HeaderLine2} </h2>
                        <p>{FeaturesOnContent.paragraph}
                        </p>
                     </div>
                  </div>
                  {
                     FeaturesOnContent.ContentArray && FeaturesOnContent.ContentArray.map((i) => (
                        <div className="col-lg-3 col-md-6">
                           <div className="featured-logo">
                              <img src={i.img} />
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

export default FeaturesOn