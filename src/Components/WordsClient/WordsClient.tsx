import React from 'react'
import video1 from "../../Images/client-video1.png"
import videosvg from "../../Images/video-play-ic.svg"


function WordsClient() {
  return (
    <section className="words-client-main">
   <div className="container-fluid">
      <div className="con-head text-center">
         <h2>Words from clients</h2>
         <h5>We provide cutting edge web and mobile app solutions</h5>
      </div>
      <div className="words-client-con">
         <div className="words-client-video">
            <img src={video1}/>
            <a href="#">
               <img src={videosvg}/>
            </a>
         </div>
         <div className="words-client-video">
            <img src={video1}/>
            <a href="#">
               <img src={videosvg}/>
            </a>
         </div>
         <div className="words-client-video">
            <img src={video1}/>
            <a href="#">
               <img src={videosvg}/>
            </a>
         </div>
      </div>
   </div>   
</section>
  )
}

export default WordsClient