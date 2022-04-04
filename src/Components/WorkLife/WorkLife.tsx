import React from 'react'
import Img1 from "../../Images/work-ic1.png"
import Img2 from "../../Images/work-ic2.png"
import Img3 from "../../Images/work-ic3.png"
import Img4 from "../../Images/work-ic4.png"
import Img5 from "../../Images/work-ic5.png"
import Img6 from "../../Images/work-ic6.png"
import Img7 from "../../Images/work-ic7.png"
import Img8 from "../../Images/work-ic8.png"

function WorkLife() {
  return (
    <section className="work-life-main">
    <div className="container">
       <div className="con-head text-center">
          <h2>Work Life At Its Best</h2>
          <h5>We provide cutting edge web and mobile app solutions</h5>
       </div>
       <div className="work-life">
          <div className="row gy-5">
             <div className="col-lg-4 col-md-6">
                <div className="work-life-box">
                   <img src={Img1}/>
                   <span>Learning <br/>& Development</span>
                </div>
             </div>
             <div className="col-lg-4 col-md-6">
                <div className="work-life-box">
                   <img src={Img2}/>
                   <span>Mindful <br/>Personal Guidance</span>
                </div>
             </div>
             <div className="col-lg-4 col-md-6">
                <div className="work-life-box">
                   <img src={Img3}/>
                   <span>Constructive <br/>Feedback</span>
                </div>
             </div>
             <div className="col-lg-4 col-md-6">
                <div className="work-life-box">
                   <img src={Img4}/>
                   <span>Inclusive <br/>& Open-Culture</span>
                </div>
             </div>
             <div className="col-lg-4 col-md-6">
                <div className="work-life-box">
                   <img src={Img5}/>
                   <span>Innovation <br/>& Quality First</span>
                </div>
             </div>
             <div className="col-lg-4 col-md-6">
                <div className="work-life-box">
                   <img src={Img6}/>
                   <span>Proactive <br/>Implementation</span>
                </div>
             </div>
             <div className="col-lg-4 col-md-6">
                <div className="work-life-box">
                   <img src={Img7}/>
                   <span>Best & Global <br/>Opportunities</span>
                </div>
             </div>
             <div className="col-lg-4 col-md-6">
                <div className="work-life-box">
                   <img src={Img8}/>
                   <span>Work with <br/>Latest Technology</span>
                </div>
             </div>
          </div>
       </div>
    </div>
 </section>
  )
}

export default WorkLife