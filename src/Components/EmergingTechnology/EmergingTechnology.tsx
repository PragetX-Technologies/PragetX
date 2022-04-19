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
               <h2>Our Suite of Emerging Web 3.0 IT Solutions</h2>
               <h5>Businesses are advancing and shifting their traditional workflows and approaches to digital Web 3.0 platforms. </h5>
            </div>
            <div className="emerging-technology-main">
               <div className="technology box1">
                  <img src={aiml}/>
                  <div className="technology-con">
                     <h3>AI & ML</h3>
                     <p>Refactor existing business processes and improve the decision-making approach of your organization with the power of AI/ML capabilities</p>
                  </div>
               </div>
               <div className="technology box2">
                  <img src={nft}/>
                  <div className="technology-con">
                     <h3>NFT</h3>
                     <p>Get a new pool of services with a robust foundation and countless benefits for transactions with the non-fungible token development solutions</p>
                  </div>
               </div>
               <div className="technology box3">
                  <img src={iot}/>
                  <div className="technology-con">
                     <h3>IoT</h3>
                     <p>Establish instantaneous and cognitive communication between two smart devices with the IoT integration servicese</p>
                  </div>
               </div>
               <div className="technology box4">
                  <img src={wearable}/>
                  <div className="technology-con">
                     <h3>Wearable</h3>
                     <p>Customize your electronic devices that can be worn as accessories, embedded in clothing, implanted in daily usable things</p>
                  </div>
               </div>
               <div className="technology box5">
                  <img src={blockchain}/>
                  <div className="technology-con">
                     <h3>Blockchain</h3>
                     <p>Build high-end secure IT solutions that enhance the visibility and security of your business-critical processes with the help of Blockchain technology.</p>
                  </div>
               </div>
               <div className="technology box6">
                  <img src={bigdata}/>
                  <div className="technology-con">
                     <h3>Business Intelligence and Analytics</h3>
                     <p>Evolve your business decision-making abilities with the help of actionable data analytical insights and stay ahead in this intense market competition. 
</p>
                  </div>
               </div>
               <div className="technology box7">
                  <img src={chatbot}/>
                  <div className="technology-con">
                     <h3>Chatbot</h3>
                     <p>Give your clients the flexibility to reach out to you and inquire about your digital services as per their conveniences by integrating the online website chatbot services.</p>
                  </div>
               </div>
               <div className="technology box8">
                  <img src={arvr}/>
                  <div className="technology-con">
                     <h3>AR/VR</h3>
                     <p>Convert your imagination into the real project by gathering and making use of data at scale to generate stimulated graphics to enable virtual/augmented real experience, like metaverse - an immersive internet experience</p>
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