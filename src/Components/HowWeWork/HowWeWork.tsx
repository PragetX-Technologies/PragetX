import React from 'react'
import img from "../../Images/work-img1.png"

function HowWeWork() {
  return (
    <section className="how-we-work-main">
   <div className="con-head text-center">
      <h2>Have a Glance at Our Development Approach</h2>
      <h5>We follow a complete software development lifecycle to meet the clients’ satisfaction levels.</h5>
   </div>
   <div className="how-we-work-con">
      <div className="we-work work-box1" style={{background: "url(" + img + ")",}}>
         <div className="step-no">1</div>
         <div className="work-con">
            <h4>Plan</h4>
            <p>Understanding the idea and gathring all required information of Project</p>
         </div>
      </div>
      <div className="we-work work-box2" style={{background: "url(" + img + ")",}}>
         <div className="step-no">2</div>
         <div className="work-con">
            <h4>Define</h4>
            <p>preparing a final wireframe & timeline of all functions. elements. modules etc.</p>
         </div>
      </div>
      <div className="we-work work-box3" style={{background: "url(" + img + ")",}}>
         <div className="step-no">3</div>
         <div className="work-con">
            <h4>Distribute</h4>
            <p>Scheduling and dividing work among team of developer as per fixed timeline</p>
         </div>
      </div>
      <div className="we-work work-box4" style={{background: "url(" + img + ")",}}>
         <div className="step-no">4</div>
         <div className="work-con">
            <h4>Design</h4>
            <p>Researching new trends, tools, and skills for having best UI/UX from market</p>
         </div>
      </div>
      <div className="we-work work-box5" style={{background: "url(" + img + ")",}}>
         <div className="step-no">5</div>
         <div className="work-con">
            <h4>Development</h4>
            <p>Team leader and developers initiate development as per work distribution</p>
         </div>
      </div>
      <div className="we-work work-head">
         <h2>Custom Software <br/>Development Lifecycle</h2>
      </div>
      <div className="we-work work-box6" style={{background: "url(" + img + ")",}}>
         <div className="step-no">6</div>
         <div className="work-con">
            <h4>Quality Assurance</h4>
            <p>Monitoring & ensuring proper quality maintained as per deming (PDCA) cycle</p>
         </div>
      </div>
      <div className="we-work work-box7" style={{background: "url(" + img + ")",}}>
         <div className="step-no">7</div>
         <div className="work-con">
            <h4>Testing</h4>
            <p>Evaluating and verifying if there’s and gap, error, bug, or any requirement missing before deploying</p>
         </div>
      </div>
      <div className="we-work work-box8" style={{background: "url(" + img + ")",}}>
         <div className="step-no">8</div>
         <div className="work-con">
            <h4>Deploy</h4>
            <p>Finally, getting product up and running before delivering to clients with all required changes</p>
         </div>
      </div>
      <div className="we-work work-box9" style={{background: "url(" + img + ")",}}>
         <div className="step-no">9</div>
         <div className="work-con">
            <h4>Feedback</h4>
            <p>Team passively collect and pin notes of opinions and changes from clients about project</p>
         </div>
      </div>
      <div className="we-work work-box10" style={{background: "url(" + img + ")",}}>
         <div className="step-no">10</div>
         <div className="work-con">
            <h4>Maintenance</h4>
            <p>Dedicated developer is assigned for maintenance on project if required and requested by clients</p>
         </div>
      </div>
   </div>
</section>
  )
}

export default HowWeWork