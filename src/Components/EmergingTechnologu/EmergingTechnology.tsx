import React from 'react';
import aiml from "../../Images/e-aiml.png";
import nft from "../../Images/e-nft.png";
import iot from "../../Images/e-iot.png";
import wearable from "../../Images/e-wearable.png";
import blockchain from "../../Images/e-blockchain.png"; 
import bigdata from "../../Images/e-bigdata.png"; 
import chatbot from "../../Images/e-chatbot.png"; 
import arvr from "../../Images/e-arvr.png"; 

function EmergingTechnology() {
  return (
    <section className="emerging-technology">
   <div className="container">
      <div className="row">
         <div className="emerging-technology-con">
            <div className="con-head text-center">
               <h2>Emerging Technology Services</h2>
               <h5>We provide cutting edge web and mobile app solutions</h5>
            </div>
            <div className="emerging-technology-main">
               <div className="technology box1">
                  <img src={aiml}/>
                  <div className="technology-con">
                     <h3>AI & ML</h3>
                     <p>Team of creative developers, smart leaders, digital content creators, brand marketers, working together to provide all types of software</p>
                  </div>
               </div>
               <div className="technology box2">
                  <img src={nft}/>
                  <div className="technology-con">
                     <h3>NFT</h3>
                     <p>Team of creative developers, smart leaders, digital content creators, brand marketers, working together to provide all types of software</p>
                  </div>
               </div>
               <div className="technology box3">
                  <img src={iot}/>
                  <div className="technology-con">
                     <h3>IOT</h3>
                     <p>Team of creative developers, smart leaders, digital content creators, brand marketers, working together to provide all types of software</p>
                  </div>
               </div>
               <div className="technology box4">
                  <img src={wearable}/>
                  <div className="technology-con">
                     <h3>Wearable</h3>
                     <p>Team of creative developers, smart leaders, digital content creators, brand marketers, working together to provide all types of software</p>
                  </div>
               </div>
               <div className="technology box5">
                  <img src={blockchain}/>
                  <div className="technology-con">
                     <h3>Blockchain</h3>
                     <p>Team of creative developers, smart leaders, digital content creators, brand marketers, working together to provide all types of software</p>
                  </div>
               </div>
               <div className="technology box6">
                  <img src={bigdata}/>
                  <div className="technology-con">
                     <h3>Big Data</h3>
                     <p>Team of creative developers, smart leaders, digital content creators, brand marketers, working together to provide all types of software</p>
                  </div>
               </div>
               <div className="technology box7">
                  <img src={chatbot}/>
                  <div className="technology-con">
                     <h3>Chatbot</h3>
                     <p>Team of creative developers, smart leaders, digital content creators, brand marketers, working together to provide all types of software</p>
                  </div>
               </div>
               <div className="technology box8">
                  <img src={arvr}/>
                  <div className="technology-con">
                     <h3>AR/VR</h3>
                     <p>Team of creative developers, smart leaders, digital content creators, brand marketers, working together to provide all types of software</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
  )
}

export default EmergingTechnology