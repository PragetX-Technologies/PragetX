import React from 'react'
import emailfsvg from "../../Images/email-f.svg"
import callfsvg from "../../Images/call-f.svg"


function OurBase() {
   const OurBaseContent={
      h2Header:"Our Base",
      h5Header:"Times Square Arcade, Thaltej-Shilaj Road, Thaltej, Ahmedabad, India – 380059",
      contactMethods:[
         {
            link:"/",
            img:callfsvg,
            method:"+91-846-021-8989"
         },
         {
            link:"mailto://hello@pragetx.com",
            img:emailfsvg,
            method:"hello@pragetx.com"
         },
      ]
   }
  return (
    <section className="our-base-main">
    <div className="container">
       <div className="our-base-con">
          <div className="con-head text-center">
             <h2>{OurBaseContent.h2Header}</h2>
             <h5>{OurBaseContent.h5Header}</h5>
          </div>
          <div className="our-base">
          {
             OurBaseContent.contactMethods && OurBaseContent.contactMethods.map((i)=>(
                <a className="d-flex" href={i.link}>
                <span>
                   <img src={i.img}/>
                </span>
                  {i.method}
             </a>
             ))
          }
          </div>
       </div>
    </div>
 </section>
  )
}

export default OurBase