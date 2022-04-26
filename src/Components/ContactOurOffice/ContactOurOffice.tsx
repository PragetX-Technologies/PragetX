import React from 'react'
import timeSquare from "../../Images/time-square-1.jpg"
import elanzaCrest from "../../Images/elanza-crest.png"

function ContactOurOffice() {
   const ContactOurOfficeContent={
      h2Header:"Our Offices",
      h5Header:"We provide cutting edge web and mobile app solutions",
      CorporateOffice:"Corporate Office:",
      RegisteredOffice:"Registered Office:",
      RegisteredOfficeAddressLine1:"D-101, Elanza Crest, Nr.Sigma House,",
      RegisteredOfficeAddressLine2:"Sindhubhavan road, Bodakdev, Thaltej",
      RegisteredOfficeAddressLine3:"Ahmedabad – 380059",
      CorporateOfficeAddressLine1:"16, Ground floor, Time Square 1 Arcade,",
      CorporateOfficeAddressLine2:"Thalej - Silaj Road, Thaltej ",
      CorporateOfficeAddressLine3:"Ahmedabad - 380059"
   }
  return (
      <section className="contact-our-office-main">
   <div className="container">
      <div className="con-head text-center">
         <h2>{ContactOurOfficeContent.h2Header}</h2>
         <h5>{ContactOurOfficeContent.h5Header}</h5>
      </div>
      <div className="row gy-5">
         <div className="col-lg-6 col-md-12">
            <div className="office-address">
               <div className="office-img">
                  <img src={timeSquare}/>
               </div>
               <div className="office-con">
                  <h5>{ContactOurOfficeContent.CorporateOffice}</h5>
                  <p>{ContactOurOfficeContent.CorporateOfficeAddressLine1} <br/>{ContactOurOfficeContent.CorporateOfficeAddressLine2}<br/>{ContactOurOfficeContent.CorporateOfficeAddressLine3}</p>
               </div>
            </div>
         </div>
         <div className="col-lg-6 col-md-12">
            <div className="office-address">
               <div className="office-img">
                  <img src={elanzaCrest}/>
               </div>
               <div className="office-con">
                  <h5>{ContactOurOfficeContent.RegisteredOffice}</h5>
                  <p>{ContactOurOfficeContent.RegisteredOfficeAddressLine1} <br/>{ContactOurOfficeContent.RegisteredOfficeAddressLine2}<br/>{ContactOurOfficeContent.RegisteredOfficeAddressLine3}</p>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
  )
}

export default ContactOurOffice