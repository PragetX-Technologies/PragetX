import React from 'react'
import Clutch from '../../Images/clutch.png'
import Star from '../../Images/star.png'
import GlassDoor from '../../Images/glassdoor.png'
import Google from '../../Images/google.png'
import GoodFirm from '../../Images/goodfirms.png'

function ReadOurReview() {
  return (
    <section className="read-our-review-main">
    <div className="container">
       <div className="read-our-review-con">
          <div className="con-head text-center">
             <h2>Know What Our Clients and Team Have to Say About PragetX</h2>
             <h5>Our culture is what makes us the right fit for your business to partner with us for the next-generation IT services we provide.</h5>
          </div>
          <div className="read-our-review">
             <div className="row gy-5">
                <div className="col-lg-3 col-md-6 col-sm-12">
                        <a style={{textDecoration:"none"}}href="https://clutch.co/profile/pragetx-technologies#summary" target="_blank">
                   <div className="our-review-box">
                      <div className="review-img">
                         <img src={Clutch}/>
                      </div>
                      <div className="number-l">
                         <p>Clutch Review</p>
                           <div className="star d-flex algn-items-center justify-content-center">
                            <span>5/5 </span> 
                            <img src={Star}/>
                         </div>
                      </div>
                   </div>
                           </a> 
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                         <a style={{textDecoration:"none"}}href="https://clutch.co/profile/pragetx-technologies#summary" target="_blank">
                   <div className="our-review-box">
                      <div className="review-img">
                         <img src={GoodFirm}/>
                      </div>
                      <div className="number-l">
                         <p>GoodFirms Review</p>
                           <div className="star d-flex algn-items-center justify-content-center">
                            <span>5/5 </span> 
                            <img src={Star}/>
                         </div>
                      </div>
                   </div>
                           </a> 
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                         <a style={{textDecoration:"none"}}href="https://www.google.com/search?q=pragetx%20technologies&rlz=1C1CHBD_enIN907IN907&oq=pragetx+&aqs=chrome..69i57j69i59l2j69i60l4j69i58.2665j0j7&sourceid=chrome&ie=UTF-8" target="_blank">
                   <div className="our-review-box">
                      <div className="review-img">
                         <img src={Google}/>
                      </div>
                      <div className="number-l">
                         <p>Google Review</p>
                           <div className="star d-flex algn-items-center justify-content-center">
                            <span>5/5 </span> 
                            <img src={Star}/>
                         </div>
                      </div>
                   </div>
                           </a> 
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                         <a style={{textDecoration:"none"}}href="https://www.glassdoor.co.in/Overview/Working-at-PragetX-Technologies-EI_IE5947807.11,31.htm" target="_blank">
                   <div className="our-review-box">
                      <div className="review-img">
                         <img src={GlassDoor}/>
                      </div>
                      <div className="number-l">
                         <p>Glassdoor Review</p>
                           <div className="star d-flex algn-items-center justify-content-center">
                            <span>5/5 </span> 
                            <img src={Star}/>
                         </div>
                      </div>
                   </div>
                           </a> 
                </div>
             </div>
          </div>
       </div>
    </div>
 </section>
  )
}

export default ReadOurReview