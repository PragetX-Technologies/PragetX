import React from 'react'
import img from "../../Images/work-img1.png"

function HowWeWork() {
   const HowWeWorkContent = {
      h2Header: "Have a Glance at Our Development Approach",
      h5Header: "We follow a complete software development lifecycle to meet the clients’ satisfaction levels.",
      ContentArray: [
         {
            id: 1,
            img: img,
            heading: "Plan",
            paragraph: "Understanding the idea and gathring all required information of Project"
         }, {
            id: 2,
            img: img,
            heading: "Define",
            paragraph: "preparing a final wireframe & timeline of all functions. elements. modules etc."
         }, {
            id: 3,
            img: img,
            heading: "Distribute",
            paragraph: "Scheduling and dividing work among team of developer as per fixed timeline"
         }, {
            id: 4,
            img: img,
            heading: "Design",
            paragraph: "Researching new trends, tools, and skills for having best UI/UX from market"
         }, {
            id: 5,
            img: img,
            heading: "Development",
            paragraph: "Team leader and developers initiate development as per work distribution"
         }, {
            id: 6,
            img: img,
            heading: "Quality Assurance",
            paragraph: "Monitoring & ensuring proper quality maintained as per deming (PDCA) cycle."
         }, {
            id: 7,
            img: img,
            heading: "Testing",
            paragraph: "Evaluating and verifying if there’s and gap, error, bug, or any requirement missing before deploying"
         }, {
            id: 8,
            img: img,
            heading: "Deploy",
            paragraph: "preparing a final wireframe & timeline of all functions. elements. modules etc."
         }, {
            id: 9,
            img: img,
            heading: "Feedback",
            paragraph: "Team passively collect and pin notes of opinions and changes from clients about project"
         }, {
            id: 10,
            img: img,
            heading: "Maintenance",
            paragraph: "Dedicated developer is assigned for maintenance on project if required and requested by clients"
         }
      ],
      h2Headerline1: "Custom Software",
      h2Headerline2: "Development Lifecycle",
   }

   return (
      <section className="how-we-work-main">
         <div className="con-head text-center">
            <h2>Have a Glance at Our Development Approach</h2>
            <h5>We follow a complete software development lifecycle to meet the clients’ satisfaction levels.</h5>
         </div>
         <div className="how-we-work-con">
            {
               HowWeWorkContent.ContentArray && HowWeWorkContent.ContentArray.slice(0, 5).map((i) => (

                  <div className={`we-work work-box${i.id}`} style={{ background: "url(" + img + ")", }}>
                     <div className="step-no">{i.id}</div>
                     <div className="work-con">
                        <h4>{i.heading}</h4>
                        <p>{i.paragraph}</p>
                     </div>
                  </div>
               ))
            }
            <div className="we-work work-head">
               <h2>{HowWeWorkContent.h2Headerline1} <br />{HowWeWorkContent.h2Headerline2} </h2>
            </div>
            {
               HowWeWorkContent.ContentArray && HowWeWorkContent.ContentArray.slice(5, 10).map((i) => (

                  <div className={`we-work work-box${i.id}`} style={{ background: "url(" + img + ")", }}>
                     <div className="step-no">{i.id}</div>
                     <div className="work-con">
                        <h4>{i.heading}</h4>
                        <p>{i.paragraph}</p>
                     </div>
                  </div>
               ))
            }
         </div>
      </section>
   )
}

export default HowWeWork