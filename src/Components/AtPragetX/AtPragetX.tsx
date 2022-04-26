import React from 'react'

function AtPragetX() {

   const AtPragetXContent = {
      h2Header:"Our Mantra",
      h5Header:"At PragetX, We Live By Our Mantra",
      ContentArray:[
         {
            number:1,
            h5Header:"Listen",
            paragraph:"We listen to each important requirement from the client in detail and share valuable suggestions to come up with the best wireframe design.",
         },{
            number:2,
            h5Header:"Develop",
            paragraph:"We develop the project by aligning the team of highly skilled developers and leaders, using agile methodologies, and dedicatedly following a complete software development life cycle.",
         },{
            number:3,
            paragraph:"Once we finish the software development, we ensure that it meets our clients’ requirements and gives them 100% satisfaction with our services",
         }
      ]
   }

  return (
    <section className="at-pragetx-main">
   <div className="container">
      <div className="con-head text-center">
         <h2>{AtPragetXContent.h2Header}</h2>
         <h5>{AtPragetXContent.h5Header}</h5>
      </div>
      <div className="at-pragetx">
         {
            AtPragetXContent?.ContentArray && AtPragetXContent?.ContentArray.map((i,index)=>(
            <div className={`at-box${i.number}`}>
               <div>
                  <h5>{i.h5Header}</h5>
                  <p>{i.paragraph}</p>
               </div>
            </div>
            ))
         }
      </div>
   </div>
</section>
  )
}

export default AtPragetX