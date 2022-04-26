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
   const EmergingTechnologyContent = {
      h2Header:"Our Suite of Emerging Web 3.0 IT Solutions",
      h5Header:"Businesses are advancing and shifting their traditional workflows and approaches to digital Web 3.0 platforms.",
      ContentArray:[
         {
            number:1,
            img:aiml,
            heading:"AI & ML",
            paragraph:"Refactor existing business processes and improve the decision-making approach of your organization with the power of AI/ML capabilities"
         },
         {
            number:2,
            img:nft,
            heading:"NFT",
            paragraph:"Get a new pool of services with a robust foundation and countless benefits for transactions with the non-fungible token development solutions"
         },
         {
            number:3,
            img:iot,
            heading:"IoT",
            paragraph:"Establish instantaneous and cognitive communication between two smart devices with the IoT integration servicese"
         },
         {
            number:4,
            img:wearable,
            heading:"Wearable",
            paragraph:"Customize your electronic devices that can be worn as accessories, embedded in clothing, implanted in daily usable things"
         },
         {
            number:5,
            img:blockchain,
            heading:"Blockchain",
            paragraph:"Build high-end secure IT solutions that enhance the visibility and security of your business-critical processes with the help of Blockchain technology."
         },
         {
            number:6,
            img:bigdata,
            heading:"Business Intelligence and Analytics",
            paragraph:"Evolve your business decision-making abilities with the help of actionable data analytical insights and stay ahead in this intense market competition."
         },
         {
            number:7,
            img:chatbot,
            heading:"Chatbot",
            paragraph:"Give your clients the flexibility to reach out to you and inquire about your digital services as per their conveniences by integrating the online website chatbot services."
         },
         {
            number:8,
            img:arvr,
            heading:"AR/VR",
            paragraph:"Convert your imagination into the real project by gathering and making use of data at scale to generate stimulated graphics to enable virtual/augmented real experience, like metaverse - an immersive internet experience"
         }
      ]
   }

  return (
    <section className="emerging-technology">
   <div className="container">
      <div className="row">
         <div className="emerging-technology-con">
            <div className="con-head text-center">
               <h2>{EmergingTechnologyContent.h2Header}</h2>
               <h5>{EmergingTechnologyContent.h5Header}</h5>
            </div>
            <div className="emerging-technology-main">
               {
                  EmergingTechnologyContent.ContentArray && EmergingTechnologyContent.ContentArray.map((i)=>(
                     <div className={`technology box${i.number}`}>
                        <img src={i.img}/>
                        <div className="technology-con">
                           <h3>{i.heading}</h3>
                           <p>{i.paragraph}</p>
                        </div>
                     </div>
                  ))
               }
            </div>
         </div>
      </div>
   </div>
</section>
  )
}

export default EmergingTechnology