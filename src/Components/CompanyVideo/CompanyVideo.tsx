import React from 'react'
import Companyvideo from "../../Images/company-video.jpg"
import PlaySVG from "../../Images/video-play-ic.svg"

function CompanyVideo() {
  return (
    <section className="company-video-main">
   <div className="container">
      <div className="row">
         <div className="company-video">
            <img src={Companyvideo}/>
            <a href="#">
               <img src={PlaySVG}/>
            </a>
         </div>
      </div>
   </div>
</section>
  )
}

export default CompanyVideo