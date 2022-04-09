import React from 'react'
import ClientImage from "../../Images/client-img.png"

function OurClientSays() {
  return (
    <section className="our-clients-say-main">
    <div className="container">
       <div className="con-head text-center">
          <h2>What Our Clients Say.</h2>
          <h5>Take a glance at what our clients have to share about the quality of our IT services.</h5>
       </div>
       <div className="clients-slider">
          <div id="recipeCarousel" className="carousel slide" data-bs-ride="carousel">
             <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
             <div className="carousel-inner" role="listbox">
                <div className="carousel-item active">
                   <div className="col-md-6">
                      <div className="card">
                          <div className="card-img">
                               <p className="disc">Thanks for a great job! It was a pleasure working with you, everything was done on the best side and on time. The developer was professional and very cooperative. Highly recommended!!</p>
                               <div className="client-con">
                                  <img src={ClientImage} className="img-fluid"/>
                                  <div className="client-tag">
                                     <h5>Ban Shan</h5>
                                     <p>CEO@ApplicaMedia</p>
                                  </div>
                               </div>
                          </div>
                      </div>
                   </div>
                </div>
                <div className="carousel-item">
                   <div className="col-md-6">
                      <div className="card">
                          <div className="card-img">
                               <p className="disc">It was a pleasure discussing my website requirement. A quick discussion with this team cleared doubts pertaining to website and App development for my new Cafe. The team working were talented, coordinated and disciplined. The regular feedback from the owner kept me confident of the progress. Thanks PragetX.</p>
                               <div className="client-con">
                                  <img src={ClientImage} className="img-fluid"/>
                                  <div className="client-tag">
                                     <h5>Christopher</h5>
                                     <p>CEO@ApplicaMedia</p>
                                  </div>
                               </div>
                          </div>
                      </div>
                   </div>
                </div>
                <div className="carousel-item">
                   <div className="col-md-6">
                      <div className="card">
                          <div className="card-img">
                               <p className="disc">Thanks for a great job! It was a pleasure working with you, everything was done on the best side and on time. The developer was professional and very cooperative. Highly recommended!!</p>
                               <div className="client-con">
                                  <img src={ClientImage} className="img-fluid"/>
                                  <div className="client-tag">
                                     <h5>Ban Shan</h5>
                                     <p>CEO@ApplicaMedia</p>
                                  </div>
                               </div>
                          </div>
                      </div>
                   </div>
                </div>
                <div className="carousel-item">
                   <div className="col-md-6">
                      <div className="card">
                          <div className="card-img">
                               <p className="disc">It was a pleasure discussing my website requirement. A quick discussion with this team cleared doubts pertaining to website and App development for my new Cafe. The team working were talented, coordinated and disciplined. The regular feedback from the owner kept me confident of the progress. Thanks PragetX.</p>
                               <div className="client-con">
                                  <img src={ClientImage} className="img-fluid"/>
                                  <div className="client-tag">
                                     <h5>Christopher</h5>
                                     <p>CEO@ApplicaMedia</p>
                                  </div>
                               </div>
                          </div>
                      </div>
                   </div>
                </div>
             </div>
             <a className="carousel-control-prev bg-transparent w-aut" href="#recipeCarousel" role="button" data-bs-slide="prev">
                 <span className="carousel-control-prev-icon" aria-hidden="true"></span>
             </a>
             <a className="carousel-control-next bg-transparent w-aut" href="#recipeCarousel" role="button" data-bs-slide="next">
                 <span className="carousel-control-next-icon" aria-hidden="true"></span>
             </a>
         </div>
       </div>
    </div>   
 </section>
  )
}

export default OurClientSays