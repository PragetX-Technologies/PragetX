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
  return (
    <section className="our-work-ethics-main">
   <div className="container">
      <div className="row">
         <div className="emerging-technology-con">
            <div className="con-head text-center">
               <h2>Our Work Ethics</h2>
               <h5>We provide cutting edge web and mobile app solutions</h5>
            </div>
            <div className="work-ethics-main">
               <div className="ethics box1">
                  <img src={clientnumberone}/>
                  <div className="ethics-con">
                     <h4>Clients Number One</h4>
                  </div>
               </div>
               <div className="ethics box2">
                  <img src={nevercomplain}/>
                  <div className="ethics-con">
                     <h4>Feedback is All Welcomed</h4>
                  </div>
               </div>
               <div className="ethics box3">
                  <img src={teamleader}/>
                  <div className="ethics-con">
                     <h4>Follow Team Leader</h4>
                  </div>
               </div>
               <div className="ethics box4">
                  <img src={bringsuggestions}/>
                  <div className="ethics-con">
                     <h4>Be Suggestive</h4>
                  </div>
               </div>
               <div className="ethics box5">
                  <img src={moralhumility}/>
                  <div className="ethics-con">
                     <h4>Moral Humility</h4>
                  </div>
               </div>
               <div className="ethics box6">
                  <img src={remembercompanygoal}/>
                  <div className="ethics-con">
                     <h4>Remember Company's Goal</h4>
                  </div>
               </div>
               <div className="ethics box7">
                  <img src={bepreparedforchallenges}/>
                  <div className="ethics-con">
                     <h4>Be Prepared For Challenges</h4>
                  </div>
               </div>
               <div className="ethics box8">
                  <img src={alwaysbefocused}/>
                  <div className="ethics-con">
                     <h4>Always Be Focused</h4>
                  </div>
               </div>
               <div className="ethics box9">
                  <img src={beyourself}/>
                  <div className="ethics-con">
                     <h4>Be Yourself</h4>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
  )
}

export default OurWorkEthics