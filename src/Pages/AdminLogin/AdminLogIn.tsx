import React, { useEffect, useState } from 'react'
import '../../CSS/Admin.css'
import Logo from '../../Images/logo.svg'

function Login() {
   const [userName, setUserName] = useState()
   const [password, setPassword] = useState()
   const [Loader, setLoader] = useState(false)
//    const [show, setShow] = useState(false);
//    const [response, setresponse] = useState();

//   const handleClose = () => setShow(false);

//    const handleSubmit =async()=>{   
//       setLoader(true)
//       const res = await Auth(userName,password)
//       console.log(res)
//       if(res !== undefined){
//          setLoader(false)
//       }
//       if(res.error === true){
//          setShow(true)
//       }else{
//          console.log("pass")
//          localStorage.setItem('token', res.token)
//          setresponse(res)
//          props.setLogin(true)
//          navigator('/BaseActivity')
//       }
//    }
   
//    useEffect(() => {
// 		const token = localStorage.getItem('token')
// 		if (token) {
// 			const decoded = jwtDecode(token)
// 			if (! decoded) {
// 				localStorage.removeItem('token')
// 			} else {
// 			   console.log(decoded)
// 			}
// 		}
// 	}, [response])
   
  return (
     <>
   <section className="login-signup-main">
   <div className="container">
      <div className="d-flex flex-row login-signup-con">
         <div className="col-lg-2 col-md-12"></div>
         <div className="col-lg-8 col-md-12 text-left">
            <div className="login-signup-form">
               <div className="login-logo">
                  <img src={Logo}/>
               </div>
               <ul className="nav nav-tabs" id="myTab" role="tablist">
                 <li className="nav-item" role="presentation">
                   <button className="nav-link active" id="login-tab" data-bs-toggle="tab" data-bs-target="#login" type="button" role="tab" aria-controls="login" aria-selected="true">Log In</button>
                 </li>
               </ul>
               <div className="tab-content" id="myTabContent">
                 <div className="tab-pane fade show active" id="login" role="tabpanel" aria-labelledby="login-tab">
                     <div>
                        <div className="d-flex flex-column justify-content-center gx-5">
                           <div className="col-lg-6 col-md-12 m-auto mb-1">
                            <input type="text" defaultValue={userName} className="form-control" placeholder="Email"/>
                           </div>
                           <div className="col-lg-6 col-md-12 m-auto mt-1">
                            <input type="password" defaultValue={password}  className="form-control" placeholder="Password"/>
                           </div>
                        </div>
                        <div className='d-flex justify-content-center'>
                           <button  className="btn btn-primary justify-conten" disabled={Loader}>{Loader ? "Loading" : "submit"}</button>
                        </div>
                     </div>
                 </div>
               </div>
            </div>
         </div>
         <div className="col-lg-2 col-md-12"></div>
      </div>
   </div>
</section>
</>
  )}

export default Login