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
    const ClientLogoArray=[img3m,chevron,cscs,tsmc,kpmg,png,pfizer,bankofamerica,underarmour,costco,exxonmobil,foxconn,cheinken,jpmorgan,nvidia,saudi,tmobile,walmart,tm]

  return (
   <section className="client-logo-slider">
   <div className="container-fluid">
       <div className="row">
           <div className="client-logo-con client-logo-slider">
               <div className="client-logo-review">
                   {
                       ClientLogoArray && ClientLogoArray.map((i)=>(
                           
                           <div className="r-logo1">
                                <img src={i}/>
                            </div>
                       ))   
                   }
               </div>
           </div>
       </div>
   </div>
</section>
 )
}

export default ClientLogo