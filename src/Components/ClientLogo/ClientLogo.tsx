import React from 'react'
import img3m from "../../Images/c-3m.svg"
import chevron from "../../Images/c-chevron.svg"
import cscs from "../../Images/c-cscs.svg"
import tsmc from "../../Images/c-tsmc-logo.svg"
import kpmg from "../../Images/c-kpmg-logo.svg"
import png from "../../Images/c-p&g.svg"
import pfizer from "../../Images/c-pfizer.svg"
import bankofamerica from "../../Images/c-bank-of-america.svg"
import underarmour from "../../Images/c-under-armour.svg"
import costco from "../../Images/c-costco-wholesale.svg"
import exxonmobil from "../../Images/c-exxonmobil.svg"
import foxconn from "../../Images/c-foxconn-logo.svg"
import cheinken from "../../Images/c-heineken.svg"
// import cjnj from "../../Images/c-j&j.svg"
import jpmorgan from "../../Images/c-jpmorgan-chase.svg"
import nvidia from "../../Images/c-nvidia-wordmark.svg"
import saudi from "../../Images/c-saudi-aramco.svg"
import tmobile from "../../Images/c-t-mobile.svg"
import walmart from "../../Images/c-walmart.svg"
import tm from "../../Images/c-tm.png"


function ClientLogo() {
  return (
   <section className="client-logo-slider">
   <div className="container-fluid">
       <div className="row">
           <div className="client-logo-con client-logo-slider">
               <div className="client-logo-review">
                   <div className="r-logo1">
                       <img src={img3m}/>
                   </div>
                   <div className="r-logo1">
                       <img src={chevron}/>
                   </div>
                   <div className="r-logo1">
                       <img src={cscs}/>
                   </div>
                   <div className="r-logo1">
                       <img src={tsmc}/>
                   </div>
                   <div className="r-logo1">
                       <img src={underarmour}/>
                   </div>
                   {/* <div className="r-logo1">
                       <img src="image/c-tesla-motors.svg"/>
                   </div> */}
                   <div className="r-logo1">
                       <img src={kpmg}/>
                   </div>
                   <div className="r-logo1">
                       <img src={png}/>
                   </div>
                   <div className="r-logo1">
                       <img src={pfizer}/>
                   </div>
                   <div className="r-logo1">
                       <img src={bankofamerica}/>
                   </div>
                   <div className="r-logo1">
                       <img src={costco}/>
                   </div>
                   <div className="r-logo1">
                       <img src={exxonmobil}/>
                   </div>
                   <div className="r-logo1">
                       <img src={foxconn}/>
                   </div>
                   <div className="r-logo1">
                       <img src={cheinken}/>
                   </div>
                   {/* <div className="r-logo1">
                       <img src={cjnj}/>
                   </div> */}
                   <div className="r-logo1">
                       <img src={jpmorgan}/>
                   </div>
                   <div className="r-logo1">
                       <img src={nvidia}/>
                   </div>
                   <div className="r-logo1">
                       <img src={saudi}/>
                   </div>
                   <div className="r-logo1">
                       <img src={tmobile}/>
                   </div>
                   <div className="r-logo1">
                       <img src={walmart}/>
                   </div>
                   <div className="r-logo1">
                       <img src={tm}/>
                   </div>
               </div>
           </div>
       </div>
   </div>
</section>
 )
}

export default ClientLogo