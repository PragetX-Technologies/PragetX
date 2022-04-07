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
            <h4>Understanding & Planning:</h4>
            <p>We listen to all requirements that our clients have to say, list them down in a proper manner, understand the client demands, and then plan the project.
</p>
         </div>
      </div>
      <div className="we-work work-box2" style={{background: "url(" + img + ")",}}>
         <div className="step-no">2</div>
         <div className="work-con">
            <h4>Strategizing:</h4>
            <p>After gathering all required information about the project, we strategize the roadmap or process flow and wireframe the project to lead and deliver it on a given timeline</p>
         </div>
      </div>
      <div className="we-work work-box3" style={{background: "url(" + img + ")",}}>
         <div className="step-no">3</div>
         <div className="work-con">
            <h4>Distributinge</h4>
            <p>We make a team of developers and creative thinkers and distribute the workloads with mentioned deadlines and requirements to the subject matter experts.</p>
         </div>
      </div>
      <div className="we-work work-box4" style={{background: "url(" + img + ")",}}>
         <div className="step-no">4</div>
         <div className="work-con">
            <h4>Designing</h4>
            <p>With thorough research about the project-related trends, tools, market values, tools, and skills, we come up with an innovative UI/UX design</p>
         </div>
      </div>
      <div className="we-work work-box5" style={{background: "url(" + img + ")",}}>
         <div className="step-no">5</div>
         <div className="work-con">
            <h4>Development</h4>
            <p>The main project development part now takes place as per the distributed workloads and priorities to meet the project development deadline.</p>
         </div>
      </div>
      <div className="we-work work-head">
         <h2>Custom Software <br/>Development Lifecycle</h2>
      </div>
      <div className="we-work work-box6" style={{background: "url(" + img + ")",}}>
         <div className="step-no">6</div>
         <div className="work-con">
            <h4>Quality Assurance</h4>
            <p>Once the software development part is done, we put the API into the testing process to find, remediate, and ensure high-quality software.</p>
         </div>
      </div>
      <div className="we-work work-box7" style={{background: "url(" + img + ")",}}>
         <div className="step-no">7</div>
         <div className="work-con">
            <h4>Vulnerability Assessment & Penetration Testing</h4>
            <p>Finding and remediating concerning and potential software bugs and security loopholes to ensure highly-secured software development</p>
         </div>
      </div>
      <div className="we-work work-box8" style={{background: "url(" + img + ")",}}>
         <div className="step-no">8</div>
         <div className="work-con">
            <h4>Deploying and delivering</h4>
            <p>Ensuring the software build quality and its performance; deploying it to the required platform, and delivering it to clients as assured.
</p>
         </div>
      </div>
      <div className="we-work work-box9" style={{background: "url(" + img + ")",}}>
         <div className="step-no">9</div>
         <div className="work-con">
            <h4>Project Demo and Feedback</h4>
            <p>Delivering projects to the client and guiding them to make proper use of the software solution for their quick solution adaptation.</p>
         </div>
      </div>
      <div className="we-work work-box10" style={{background: "url(" + img + ")",}}>
         <div className="step-no">10</div>
         <div className="work-con">
            <h4>Maintenance</h4>
            <p>Our project development plans are comprised with necessary maintenance and back support services with aligned dedicated resources/developers.</p>
         </div>
      </div>
   </div>
</section>
  )
}

export default HowWeWork