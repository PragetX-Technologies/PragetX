import React from 'react'

function AboutUsTagLine() {
   const AboutUsTagLineContent ={
      line1:"We are a Software Development and Digital Marketing",
      line2:"Company Based in India and USA."
   }
  return (
    <section className="we-are-tag-line about-tag-line">
    <div className="container">
       <div className="row">
          <div className="we-are-tag-line-con">
             <h2>{AboutUsTagLineContent.line1}<br/>{AboutUsTagLineContent.line2}</h2>
          </div>
       </div>
    </div>
 </section>
  )
}

export default AboutUsTagLine