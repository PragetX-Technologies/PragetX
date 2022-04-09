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
                     <div className="col-lg-6 col-md-12">
                      <input type="text" className="form-control" placeholder="First Name"/>
                     </div>
                     <div className="col-lg-6 col-md-12">
                      <input type="text" className="form-control" placeholder="Last Name"/>
                     </div>
                     <div className="col-lg-6 col-md-12">
                      <input type="text" className="form-control" placeholder="Your Email Address"/>
                     </div>
                     <div className="col-lg-6 col-md-12">
                      <input type="text" className="form-control" placeholder="Phone Number"/>
                     </div>
                     <div className="col-lg-6 col-md-12">
                        <select className="form-select" aria-label="Default select example">
                           <option selected>Select a Service</option>
                           <option value="1">Service One</option>
                           <option value="2">Service Two</option>
                           <option value="3">Service Three</option>
                        </select>
                     </div>
                     <div className="col-lg-6 col-md-12">
                        <select className="form-select" aria-label="Default select example">
                           <option selected>Select Budget</option>
                           <option value="1">Budget One</option>
                           <option value="2">Budget Two</option>
                           <option value="3">Budget Three</option>
                        </select>
                     </div>
                     <div className="col-lg-12 col-md-12">
                        <select className="form-select" aria-label="Default select example">
                           <option selected>Requirement</option>
                           <option value="1">Budget One</option>
                           <option value="2">Budget Two</option>
                           <option value="3">Budget Three</option>
                        </select>
                     </div>
                     <div className="col-lg-12 col-md-12">
                      <textarea className="form-control" rows={3} placeholder="Brief about the project"></textarea>
                     </div>
                     <div className="col-lg-12 col-md-12">
                        <div className="input-group custom-file-button">
                           <label className="input-group-text" htmlFor="inputGroupFile">Have a file to share?</label>
                           <input type="file" className="form-control" id="inputGroupFile"/>
                        </div>
                        <span>Only Document, Image or ZIP file. Max size 8MB</span>
                     </div>
                     <div className="col-lg-12 col-md-12">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                          <label className="form-check-label" htmlFor="flexCheckDefault">
                            I want a copy of NDA
                          </label>
                        </div>
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