import React from 'react'
import GoodFirms from "../../Images/goodfirms.png"
import Clutch from "../../Images/clutch.png"
import AppFuture from "../../Images/appfutura.png"
import GlassDoor from "../../Images/glassdoor.png"
import MobileAppDaily from "../../Images/mobile-app-daily.png"


function HeaderTopSlider() {
  return (
    <section className="header-top-slider">
   <div className="container">
      <div className="row">
         <div className="header-top-con">
            <h1>Best Agile <span>Collaboration</span> in <br/>the Age of Remote Work</h1>
            <h6>We construct a masterpiece of websites and mobile applications for businesses, whether it’s a small startup, mid-enterprise or a fortune 500 company.</h6>
            <a href="#" className="btn">Get Developers Now <i className="fa fa-angle-right" aria-hidden="true"></i></a>
            <div className="logos-review">
               <div className="r-logo1">
                  <img src={GoodFirms}/>
               </div>
               <div className="r-logo1">
                  <img src={Clutch}/>
               </div>
               <div className="r-logo1">
                  <img src={AppFuture}/>
               </div>
               <div className="r-logo1">
                  <img src={GlassDoor}/>
               </div>
               <div className="r-logo1">
                  <img src={MobileAppDaily}/>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
  )
}

export default HeaderTopSlider