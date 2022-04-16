import React from 'react'
import ClientImage from "../../Images/client-img.png"
import PravinVivek from "../../Images/praveen-vivek.png"
import KrishnaKumar from "../../Images/krishna-kumar.jpg"
import folo from "../../Images/tb-folo-app.png"
import J1click from "../../Images/manish-chaudhary.jpg"
import schoolOwl from "../../Images/owls-school-product-logo.png"
import carlos from "../../Images/carlos.png"
import arishai from "../../Images/ari-shai.png"
import jyotirmayi from "../../Images/jyotirmayi.jpg"


function OurClientSays() {
  return (
   <section className="our-clients-say-main">
   <div className="container">
       <div className="con-head text-center">
           <h2>What Our Clients Say.</h2>
           <h5>We provide cutting edge web and mobile app solutions</h5>
       </div>
       <div className="clients-slider">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7" aria-label="Slide 8"></button>
                </div>
                <div className="carousel-inner d-flex row" role="listbox">
                    <div className="carousel-item active">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-img">
                                    <p className="disc">Thanks for a great job! It was a pleasure working with you, everything was done on the best side and on time. The developer was professional and very cooperative. Highly recommended!!</p>
                                    <div className="client-con">
                                        <img src={arishai} className="img-fluid"/>
                                        <div className="client-tag">
                                            <h5>Ari Shai</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-img">
                                    <p className="disc">Highly recommend. I think their strong point is communication. They do follow you in your project and that is priceless. We hired this agency for a redesign of a corporate site in europe. They work on budget and deliver
                                        on time. Thanks</p>
                                    <div className="client-con">
                                        <img src={carlos} className="img-fluid"/>
                                        <div className="client-tag">
                                            <h5>Carlos Rosales</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-img">
                                    <p className="disc">Team PragetX was great to deliver the website I was thinking of. They were dedicated and very professional. Output was better then what I expected and as they promised. Will surely return for future projects to sagar
                                        and his team.</p>
                                    <div className="client-con">
                                        <img src={schoolOwl} className="img-fluid"/>
                                        <div className="client-tag">
                                            <h5>Archana Tiwari</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-img">
                                    <p className="disc">We are so grateful for all of your hard work and constantly impressed by your excellent performance. Your hard work and commitment helped us complete our project on time. Thanks PragetX for being your best every day!</p>
                                    <div className="client-con">
                                        <img src={J1click} className="img-fluid"/>
                                        <div className="client-tag">
                                            <h5>Manish Chaudhary</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-img">
                                    <p className="disc">PragetX is a professional team of software developers who deliver quality product on time. Also, after delivery support is great. Team which worked with us (Sagar, Jevin and Harsh) went extra mile to fix issues faced
                                        by us after delivery.</p>
                                    <div className="client-con">
                                        <img src={folo} className="img-fluid"/>
                                        <div className="client-tag">
                                            <h5>4sure Tech</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-img">
                                    <p className="disc">Team is professional, They have expertise in delivering app on time and in a minimal budget. Thanks to the team and their hard efforts, which helped me reach a milestone of complex project.</p>
                                    <div className="client-con">
                                        <img src={KrishnaKumar} className="img-fluid"/>
                                        <div className="client-tag">
                                            <h5>Krishan Kumar</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-img">
                                    <p className="disc">It was great Experience working with such professional Team . Keep up the good Work guys . We would be getting back to you shortly with next further development works</p>
                                    <div className="client-con">
                                        <img src={PravinVivek} className="img-fluid"/>
                                        <div className="client-tag">
                                            <h5>Pravin Vivek</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-img">
                                    <p className="disc">The team is very cooperative and delivers good quality work on time. They are receptive to feedback. Overall it was a very good experience working with them. Would surely reccommend them to other organisations.</p>
                                    <div className="client-con">
                                        <img src={jyotirmayi} className="img-fluid"/>
                                        <div className="client-tag">
                                            <h5>Jyotirmayi Baral</h5>
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