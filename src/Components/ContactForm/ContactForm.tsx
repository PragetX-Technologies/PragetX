import React from 'react'

function ContactForm() {
  return (
   <section className="contact-form-main">
   <div className="container">
      <div className="row gy-5">
         <div className="col-lg-2 col-md-12"></div>
         <div className="col-lg-8 col-md-12">
            <div className="contact-form-con">
               <div className="con-head text-center">
                  <h2>Get a Quote</h2>
                  <h5>Please fill in the form and our representative will get back to you.</h5>
               </div>
               <form>
                  <div className="form-row">
                     <div className="col-lg-12 col-md-12">
                        <h6>1. Tell us about your company</h6>
                     </div>
                     <div className="col-lg-6 col-md-12">
                      <input type="text" className="form-control" placeholder="First Name"/>
                     </div>
                     <div className="col-lg-6 col-md-12">
                      <input type="text" className="form-control" placeholder="Your Email Address"/>
                     </div>
                     <div className="col-lg-6 col-md-12">
                      <input type="text" className="form-control" placeholder="Phone Number"/>
                     </div>
                     <div className="col-lg-6 col-md-12">
                      <input type="text" className="form-control" placeholder="Company website"/>
                     </div>
                     <div className="col-lg-12 col-md-12">
                      <input type="text" className="form-control" placeholder="What’s your company’s biggest challenge today?"/>
                     </div>
                     <div className="col-lg-12 col-md-12">
                        <h6>2. What are you looking to work on?</h6>
                     </div>
                     <div className="col-lg-12 col-md-12">
                      <textarea className="form-control" rows={3} placeholder="Describe your project briefly"></textarea>
                     </div>
                     {/* <div className="col-lg-12 col-md-12">
                        <label className="price-label">What’s your budget?</label>
                       
                     </div> */}
                     <div className="col-lg-12 col-md-12">
                        <div className="input-group custom-file-button">
                           <label className="input-group-text" htmlFor="inputGroupFile">Have a file to share?</label>
                           <input type="file" className="form-control" id="inputGroupFile"/>
                        </div>
                        <span>Only Document, Image or ZIP file. Max size 8MB</span>
                     </div>
                     <div className="col-lg-12 col-md-12">
                        <h6>3. What services are you interested in?</h6>
                     </div>
                     <div className="col-lg-6 col-md-12">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                          <label className="form-check-label" htmlFor="flexCheckDefault">
                            Web or Mobile Apps Development
                          </label>
                        </div>
                     </div>
                     <div className="col-lg-6 col-md-12">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1"/>
                          <label className="form-check-label" htmlFor="flexCheckDefault1">
                            Hire Dedicated Developers
                          </label>
                        </div>
                     </div>
                     <div className="col-lg-6 col-md-12">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2"/>
                          <label className="form-check-label" htmlFor="flexCheckDefault2">
                            AI/ML Development Services
                          </label>
                        </div>
                     </div>
                     <div className="col-lg-6 col-md-12">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault3"/>
                          <label className="form-check-label" htmlFor="flexCheckDefault3">
                            Custom Software Development
                          </label>
                        </div>
                     </div>
                     <div className="col-lg-6 col-md-12">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault4"/>
                          <label className="form-check-label" htmlFor="flexCheckDefault4">
                            Software Testing and QA
                          </label>
                        </div>
                     </div>
                     <div className="col-lg-6 col-md-12">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault5"/>
                          <label className="form-check-label" htmlFor="flexCheckDefault5">
                            API Development & Integration
                          </label>
                        </div>
                     </div>
                     <div className="col-lg-12 col-md-12">
                        <h6>4. Schedule a call with our tech expert. Get a detailed tech consultation for free!</h6>
                     </div>
                     <div className="col-lg-6 col-md-12">
                      <input type="text" className="form-control" placeholder="Meeting Date"/>
                     </div>
                     <div className="col-lg-6 col-md-12">
                      <input type="text" className="form-control" placeholder="Meeting Time"/>
                     </div>
                  </div>
                  <button type="submit" className="btn btn-primary">Get Started</button>
               </form>
            </div>
         </div>
         <div className="col-lg-2 col-md-12"></div>
      </div>
   </div>
</section>
  )
}

export default ContactForm