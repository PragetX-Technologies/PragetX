import React from 'react'
import map from "../../Images/map.png"

function AcrossTheWorld() {
  return (
    <section className="across-the-world-main">
   <div className="container-fluid">
      <div className="con-head text-center">
         <h2>We Work Across the World</h2>
         <h5>We provide cutting edge web and mobile app solutions</h5>
      </div>
      <div className="map">
         <img src={map}/>
      </div>
   </div>   
</section>
  )
}

export default AcrossTheWorld