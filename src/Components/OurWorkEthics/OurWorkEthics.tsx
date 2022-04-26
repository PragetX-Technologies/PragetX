import React from 'react'
import clientnumberone from "../../Images/clients-number-one.jpg"
import nevercomplain from "../../Images/never-ever-complain.jpg"
import teamleader from "../../Images/follow-team-leader.jpg"
import bringsuggestions from "../../Images/bring-suggestions.jpg"
import moralhumility from "../../Images/moral-humility.jpg"
import remembercompanygoal from "../../Images/remember-company-goal.jpg"
import bepreparedforchallenges from "../../Images/be-prepared-for-challenges.jpg"
import alwaysbefocused from "../../Images/always-be-focused.jpg"
import beyourself from "../../Images/be-yourself.jpg"

function OurWorkEthics() {
   const OurWorkEthicsContent={
      h2Header:"Our Work Ethics",
      h5Header:"We provide cutting edge web and mobile app solutions",
      ContentArray:[
         {
            id:1,
            img:clientnumberone,
            heading:"Clients Number One",
         },
         {
            id:2,
            img:nevercomplain,
            heading:"Feedback is All Welcomed",
         },
         {
            id:3,
            img:teamleader,
            heading:"Follow Team Leader",
         },
         {
            id:4,
            img:bringsuggestions,
            heading:"Be Suggestive",
         },
         {
            id:5,
            img:moralhumility,
            heading:"Moral Humility",
         },
         {
            id:6,
            img:remembercompanygoal,
            heading:"Remember Company's Goal",
         },
         {
            id:7,
            img:bepreparedforchallenges,
            heading:"Be Prepared For Challenges",
         },
         {
            id:8,
            img:alwaysbefocused,
            heading:"Always Be Focused",
         },
         {
            id:9,
            img:beyourself,
            heading:"Be Yourself",
         },
      ]
   }
  return (
    <section className="our-work-ethics-main">
   <div className="container">
      <div className="row">
         <div className="emerging-technology-con">
            <div className="con-head text-center">
               <h2>{OurWorkEthicsContent.h2Header}</h2>
               <h5>{OurWorkEthicsContent.h5Header}</h5>
            </div>
            <div className="work-ethics-main">
               {
                  OurWorkEthicsContent && OurWorkEthicsContent.ContentArray.map((i)=>(
               <div className={`ethics box${i.id}`}>
                  <img src={i.img}/>
                  <div className="ethics-con">
                     <h4>{i.heading}</h4>
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

export default OurWorkEthics