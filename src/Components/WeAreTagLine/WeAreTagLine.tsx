import React from 'react'

function WeAreTagLine() {
   
   const WeAreTagLineContent={
      h2headingLine1:"We are following all International",
      h2headingLine2:"Code Architectural Norm",
   }

  return (
    <section className="we-are-tag-line">
    <div className="container">
       <div className="row">
          <div className="we-are-tag-line-con">
             <h2>{WeAreTagLineContent.h2headingLine1} <br/>{WeAreTagLineContent.h2headingLine2}</h2>
          </div>
       </div>
    </div>
 </section>
  )
}

export default WeAreTagLine