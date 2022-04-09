import React from 'react'
import timeSquare from "../../Images/time-square-1.jpg"
import elanzaCrest from "../../Images/elanza-crest.png"

function ContactOurOffice() {
  return (
      <section className="contact-our-office-main">
   <div className="container">
      <div className="con-head text-center">
         <h2>Our Offices</h2>
         <h5>We provide cutting edge web and mobile app solutions</h5>
      </div>
      <div className="row gy-5">
         <div className="col-lg-6 col-md-12">
            <div className="office-address">
               <div className="office-img">
                  <img src={timeSquare}/>
               </div>
               <div className="office-con">
                  <h5>Corporate Office:</h5>
                  <p>16, Ground floor, Time Square 1 Arcade, <br/>Thalej - Silaj Road, Thaltej <br/>Ahmedabad - 380059</p>
               </div>
            </div>
         </div>
         <div className="col-lg-6 col-md-12">
            <div className="office-address">
               <div className="office-img">
                  <img src={elanzaCrest}/>
               </div>
               <div className="office-con">
                  <h5>Registered Office:</h5>
                  <p>D-101, Elanza Crest, Nr.Sigma House, <br/>Sindhubhavan road, Bodakdev, Thaltej <br/>Ahmedabad – 380059</p>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
  )
}

export default ContactOurOffice