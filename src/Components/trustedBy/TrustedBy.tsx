import React from 'react'
import Logo1 from "../../Images/tru-logo1.png"
import Logo2 from "../../Images/tru-logo2.png"
import Logo3 from "../../Images/tru-logo3.png"
import Logo4 from "../../Images/tru-logo4.png"
import Logo5 from "../../Images/tru-logo5.png"
import Logo6 from "../../Images/tru-logo6.png"
import Logo7 from "../../Images/tru-logo7.png"
import Logo8 from "../../Images/tru-logo8.png"
import Logo9 from "../../Images/tru-logo8.png"

function TrustedBy() {
  return (
    <section className="trusted-by-main">
   <div className="container">
      <div className="row gy-5">
         <div className="col-lg-6 col-md-12">
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
         <div className="col-lg-6 col-md-12">
            <div className="trusted-by-con">
               <h2>Trusted By 200+ <br/>Enterprises and Startups</h2>
               <p>With innovative ideas and capability to build scalable and high performing software & apps along with constant support, we, the globally renowned custom software development company, help our clients reach market quickly and achieve their goals. </p>
               <a href="#" className="btn">Get In Touch <i className="fa fa-angle-right" aria-hidden="true"></i></a>
            </div>
         </div>
      </div>
   </div>   
</section>
  )
}

export default TrustedBy