import React from 'react'

function WeAreHiring() {
  return (
    <section className="we-are-hiring-main">
     <div className="container">
      <div className="con-head text-center">
         <h2>We're Hiring!</h2>
         <h5>We provide cutting edge web and mobile app solutions</h5>
      </div>
      <div className="we-are-hiring">
         <div className="row gy-5">
            <div className="col-lg-4 col-md-6">
               <div className="hiring-box">
                  <h5>Sr. PPC Specialist</h5>
                  <p><span>Experience:</span> 3+ Years</p>
                  <p><span>Location:</span> Ahmedabad</p>
                  <a href="#" className="btn" data-bs-toggle="modal" data-bs-target="#exampleModalFullscreen">Apply Now</a>
               </div>
            </div>
            <div className="col-lg-4 col-md-6">
               <div className="hiring-box">
                  <h5>QA Manager</h5>
                  <p><span>Experience:</span> 3+ Years</p>
                  <p><span>Location:</span> Ahmedabad</p>
                  <a href="#" className="btn"  data-bs-toggle="modal" data-bs-target="#exampleModalFullscreen" >Apply Now</a>
               </div>
            </div>
            <div className="col-lg-4 col-md-6">
               <div className="hiring-box">
                  <h5>Business Development Manager</h5>
                  <p><span>Experience:</span> 3+ Years</p>
                  <p><span>Location:</span> Ahmedabad</p>
                  <a href="#" className="btn"  data-bs-toggle="modal" data-bs-target="#exampleModalFullscreen">Apply Now</a>
               </div>
            </div>
            <div className="col-lg-4 col-md-6">
               <div className="hiring-box">
                  <h5>Quality Analyst</h5>
                  <p><span>Experience:</span> 3+ Years</p>
                  <p><span>Location:</span> Ahmedabad</p>
                  <a href="#" className="btn"  data-bs-toggle="modal" data-bs-target="#exampleModalFullscreen">Apply Now</a>
               </div>
            </div>
            <div className="col-lg-4 col-md-6">
               <div className="hiring-box">
                  <h5>React Native Developer</h5>
                  <p><span>Experience:</span> 3+ Years</p>
                  <p><span>Location:</span> Ahmedabad</p>
                  <a href="#" className="btn"  data-bs-toggle="modal" data-bs-target="#exampleModalFullscreen">Apply Now</a>
               </div>
            </div>
            <div className="col-lg-4 col-md-6">
               <div className="hiring-box">
                  <h5>Software Engineer ??? Nodejs</h5>
                  <p><span>Experience:</span> 3+ Years</p>
                  <p><span>Location:</span> Ahmedabad</p>
                  <a href="#" className="btn"  data-bs-toggle="modal" data-bs-target="#exampleModalFullscreen">Apply Now</a>
               </div>
            </div>
         </div>
      </div>
   </div>



    <div className="modal fade hire-modal-main" id="exampleModalFullscreen" aria-labelledby="exampleModalFullscreen" aria-hidden="true">
  <div className="modal-dialog modal-fullscreen">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
         <div className="hire-modal">
            <div className="row gy-5">
               {/* <div className="col-lg-6 col-md-12">
   
               </div> */}
               <div className="col-lg-12 col-md-12">
                  <div className="hire-modal-from">
                     <h3>Apply For Job:</h3>
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
                            <span style={{color:" #fff",fontSize: "12px"}}>(Git/Dribble/Behance/Pinterest/Blog/Medium)</span>
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
                           <div className="col-lg-12 col-md-12">
                            <input type="text" className="form-control" placeholder="If selects no, then please mention any one: remote or in-person"/>
                           </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit Job Application</button>
                     </form>
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

export default WeAreHiring