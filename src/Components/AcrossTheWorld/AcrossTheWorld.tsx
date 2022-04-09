import React from 'react'
import map from "../../Images/map.png"

function AcrossTheWorld() {
  return (
    <section className="across-the-world-main">
   <div className="container-fluid">
      <div className="con-head text-center">
         <h2>Our Global Footprints</h2>
         <h5>Within this shorter timeline, PragetX has managed to deliver 45+ projects successfully to clients across the world.</h5>
      </div>
      <div className="map">
         <img src={map}/>
      </div>
   </div>   
</section>
  )
}

export default AcrossTheWorld