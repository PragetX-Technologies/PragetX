import React from 'react'
import Logo from '../../Images/logo.svg'

function Navbar() {
  return (    
    <header className="header-main">
    <div className="container">
        <div className="row"> 
            <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="/"><img src={Logo}/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Solutions</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Hire Developer</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/AboutUs">About Us</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Career</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Blog</a>
                    </li>
                </ul>
                <form className="d-flex">
                    <a href="" className="btn">Get In Touch</a>
                </form>
                </div>
            </nav>
        </div>
    </div>
    </header>
  )
}

export default Navbar