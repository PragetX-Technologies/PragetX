import React from 'react'
import formimg from "../../Images/form-img.png"
import skype from "../../Images/skype.svg"
import call from "../../Images/call.svg"
import email from "../../Images/email.svg"

function BottomContactForm() {
  return (
    <section className="say-hello-main">
   <div className="container-fluid">
      <div className="d-flex flex-row say-hello-con">
         <div className="col-lg-6 col-md-12">
            <div className="contact-detail">
               <div className="form-img">
                  <img src={formimg}/>
               </div>
               <div className="con-detail">
                  <div className="col-lg-12">
                     <div className="f-skype">
                        <a className="d-flex" href="#">
                           <span>
                              <img src={skype}/>
                           </span>
                           pragetX
                        </a>
                     </div>
                  </div>
                  <div className="col-lg-12">
                     <div className="f-skype">
                        <a className="d-flex" href="#">
                           <span>
                              <img src={call}/>
                           </span>
                           +91-846-021-8989
                        </a>
                     </div>
                  </div>
                  <div className="col-lg-12">
                     <div className="f-skype">
                        <a className="d-flex" href="#">
                           <span>
                              <img src={email}/>
                           </span>
                           hello@pragetx.com
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="col-lg-6 col-md-12 text-left">
            <div className="home-contact-form">
               <h3>Fill the form below to say 'Hi!'.</h3>
               <form>
                  <div className="form-row">
                     <div className="col-lg-6 col-md-12">
                      <input type="text" className="form-control" placeholder="Your Name"/>
                     </div>
                     <div className="col-lg-6 col-md-12">
                      <input type="text" className="form-control" placeholder="Email Address"/>
                     </div>
                     <div className="col-lg-6 col-md-12">
                      <input type="text" className="form-control" placeholder="Contact Number"/>
                     </div>
                     <div className="col-lg-6 col-md-12">
                      <input type="text" className="form-control" placeholder="Alternative Contact Number"/>
                     </div>
                     <div className="col-lg-6 col-md-12">
                      <input type="text" className="form-control" placeholder="Please Share Your Portfolio Hyperlink"/>
                      <span style={{color: "#fff",fontSize: "12px"}}>(Git/Dribble/Behance/Pinterest/Blog/Medium)</span>
                     </div>                           
                     <div className="col-lg-6 col-md-12">
                      <input type="text" className="form-control" placeholder="Cover Letter"/>
                     </div>
                     <div className="col-lg-12 col-md-12">
                        <div className="input-group custom-file-button">
                           <label className="input-group-text" htmlFor="inputGroupFile">Upload Your CV/Resume</label>
                           <input type="file" className="form-control" id="inputGroupFile"/>
                        </div>
                     </div>
                     <div className="col-lg-12 col-md-12">
                        <div className="form-check form-check-inline">
                           <p>Will you be able to work both as Remote and in-person if required?</p>
                           <div className="d-flex">
                              <div className="radio">
                                 <input id="radio-1" name="radio" type="radio" checked/>
                                 <label htmlFor="radio-1" className="radio-label">Yes</label>
                              </div>
                              <div className="radio">
                                 <input id="radio-2" name="radio" type="radio"/>
                                 <label  htmlFor="radio-2" className="radio-label">No</label>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-12 col-md-12 p-1">
                      <input type="text" className="form-control" placeholder="If selects no, then please mention any one: remote or in-person"/>
                     </div>
                  </div>
                  <button type="submit" className="btn btn-primary">Submit Job Application</button>
               </form>
            </div>
         </div>
      </div>
   </div>
</section>

  )
}

export default BottomContactForm