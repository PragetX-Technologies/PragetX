import React from 'react'
import Logo1 from "../../Images/tb-school-owl.png"
import Logo2 from "../../Images/tb-urnest.png"
import Logo3 from "../../Images/tb-neogrowth.png"
import Logo4 from "../../Images/tb-elc.png"
import Logo5 from "../../Images/tb-hungry-veels.png"
import Logo6 from "../../Images/tb-nawee-app.png"
import Logo7 from "../../Images/tb-folo-app.png"
import Logo8 from "../../Images/tb-meraaki-designs.png"
import Logo9 from "../../Images/tb-j1click.jpg"

function TrustedBy() {
  return (
    <section className="trusted-by-main">
   <div className="container">
      <div className="row gy-5">
         <div className="col-lg-6 col-md-12">
            <div className="trusted-by-logo">
            <div className="trusted-by-logo">
               <div className="t-by-logo">
                  <img src={Logo1}/>
               </div>
               <div className="t-by-logo">
                  <img src={Logo2}/>
               </div>
               <div className="t-by-logo">
                  <img src={Logo3}/>
               </div>
               <div className="t-by-logo">
                  <img src={Logo4}/>
               </div>
               <div className="t-by-logo">
                  <img src={Logo5}/>
               </div>
               <div className="t-by-logo">
                  <img src={Logo6}/>
               </div>
               <div className="t-by-logo">
                  <img src={Logo7}/>
               </div>
               <div className="t-by-logo">
                  <img src={Logo8}/>
               </div>
               <div className="t-by-logo">
                  <img src={Logo9}/>
               </div>
            </div>
            </div>
         </div>
         <div className="col-lg-6 col-md-12">
            <div className="trusted-by-con">
               <h2>Our Trusted Customers</h2>
               <p>With innovative thinking and a positive attitude toward dealing with industrial problems in mind, developers at PragetX strive to provide clients with the best quality assistance till the project meets the business objectives. </p>
               <a href="#" className="btn">Get In Touch <i className="fa fa-angle-right" aria-hidden="true"></i></a>
            </div>
         </div>
      </div>
   </div>   
</section>
  )
}

export default TrustedBy