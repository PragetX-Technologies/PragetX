import React from 'react'
import productDeco from "../../Images/product-deco.png"
import productImg from "../../Images/product-img.png"
import productlogo from "../../Images/product-logo.png"
import portBg from "../../Images/port-bg.jpg"
import googlePlay from "../../Images/google-play.png"
import AppStore from "../../Images/google-play.png"
import Arrow from "../../Images/arrow.svg"

function ServingFortune() {
  return (
    <section className="home-portfolio-main">
   <div className="home-portfolio-con">
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          {/* <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button> */}
          {/* <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button> */}
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={portBg} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
               <div className="row gy-5">
                  <div className="col-lg-6 col-md-12">
                     <div className="product-img">
                        <div className="product-label">
                           <h5>FOOD DELIVERY</h5>
                        </div>
                        <div className="product-decor">
                           <img src={productDeco}/>
                        </div>
                        <div className="product-pro">
                           <img src={productImg}/>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                     <div className="product-con">
                        <div className="product-logo">
                           <img src={productlogo}/>
                        </div>
                        <h3>On-demand Delivery App</h3>
                        <h6>UI/UX Design. Mobile & Web App Development.</h6>
                        <p>The client needed to develop an iOS app that can benefit users by providing relevant service and product information inside the city. It is a comprehensive solution for your regular/daily needs that cover the requirements in the most economical way possible with ratings. Users can take a plan up to 30 days in advance.</p>
                        <a href="#" className="case-link">Case Study <img src={Arrow}/></a>
                        <div className="product-rating">
                           <div className="rating-box">
                              <h3>4.8</h3>
                              <h6>app rating</h6>
                           </div>
                           <div className="rating-box">
                              <h3>99.5%</h3>
                              <h6>crash-free users</h6>
                           </div>
                           <div className="rating-box">
                              <h3>130k</h3>
                              <h6>monthly active users</h6>
                           </div>
                        </div>
                        <div className="app-store-btn">
                           <a href="#"><img src={googlePlay}/></a>
                           <a href="#"><img src={AppStore}/></a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src={portBg} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <div className="row gy-5">
                  <div className="col-lg-6 col-md-12">
                     <div className="product-img">
                        <div className="product-label">
                           <h5>FOOD DELIVERY</h5>
                        </div>
                        <div className="product-decor">
                           <img src={productDeco}/>
                        </div>
                        <div className="product-pro">
                           <img src={productImg}/>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                     <div className="product-con">
                        <div className="product-logo">
                           <img src={productlogo}/>
                        </div>
                        <h3>On-demand Delivery App</h3>
                        <h6>UI/UX Design. Mobile & Web App Development.</h6>
                        <p>The client needed to develop an iOS app that can benefit users by providing relevant service and product information inside the city. It is a comprehensive solution for your regular/daily needs that cover the requirements in the most economical way possible with ratings. Users can take a plan up to 30 days in advance.</p>
                        <a href="#" className="case-link">Case Study <img src="image/arrow.svg"/></a>
                        <div className="product-rating">
                           <div className="rating-box">
                              <h3>4.8</h3>
                              <h6>app rating</h6>
                           </div>
                           <div className="rating-box">
                              <h3>99.5%</h3>
                              <h6>crash-free users</h6>
                           </div>
                           <div className="rating-box">
                              <h3>130k</h3>
                              <h6>monthly active users</h6>
                           </div>
                        </div>
                        <div className="app-store-btn">
                           <a href="#"><img src={googlePlay}/></a>
                           <a href="#"><img src={AppStore}/></a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
        
      </div>
   </div>
</section>
  )
}

export default ServingFortune