import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../Images/logo.svg'

function Navbar() {
  return (    
    <header className="header-main">
    <div className="container">
        <div className="row"> 
            <nav className="navbar navbar-expand-lg d-flex align-items-center">
                <Link className="navbar-brand" to="/"><img src={Logo}/></Link>
                <button className="navbar-toggler" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon d-flex"data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"><i className="fa-solid fa-bars m-auto"></i></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    {/* <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Solutions</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Hire Developer</a>
                    </li> */}
                    <li className="nav-item">
                       <Link to="/AboutUs" className='nav-link'>About Us</Link>
                    </li>
                    {/* <li className="nav-item">
                        <a className="nav-link" href="#">Portfolio</a>
                    </li> */}
                    <li className="nav-item">
                        <Link className="nav-link" to="/career">Career</Link>
                    </li>
                    {/* <li className="nav-item">
                        <a className="nav-link" href="#">Blog</a>
                    </li> */}
                </ul>
                <form className="d-flex">
                    <Link to="/ContactUs" className="btn">Contact Us</Link>
                </form>
                </div>
            </nav>
        </div>
    </div>
    </header>
  )
}

export default Navbar