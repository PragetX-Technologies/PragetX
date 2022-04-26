import React from 'react'
import Clutch from '../../Images/clutch.png'
import Star from '../../Images/star.png'
import GlassDoor from '../../Images/glassdoor.png'
import Google from '../../Images/google.png'
import GoodFirm from '../../Images/goodfirms.png'


function ReadOurReviewsAboutus() {
   const ReadOurReviwsAboutusContent={
      h2Header:"PragetX: How It All Started?",
      paragraph:"The idea of PragetX was like a buzzword in our founders’ minds that they couldn’t resist because of the change it could bring across the IT sector. That’s how the leaders of PragetX came in front and laid its pillars in 2021 with an aim to be a helping hand to businesses suffering in their digital transformation journey due to a sudden need to transition to remote work settlements. Though it’s just a startup, during a year of the journey, this visionary team has accomplished many milestones and has served 45+ global brands with the results as promised."
   }
  return (
    <section className="read-our-review-main">
    <div className="container" style={{paddingTop:"7rem"}}>
       <div className="read-our-review-con">
          <div className="con-head text-center">
             <h2>{ReadOurReviwsAboutusContent.h2Header}</h2>
             <p>{ReadOurReviwsAboutusContent.paragraph}</p>
          </div>
       </div>
    </div>
 </section>
  )
}

export default ReadOurReviewsAboutus