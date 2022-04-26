import React from 'react'
import Office1 from "../../Images/office.svg"
import Logo from "../../Images/logo.svg"
import email from "../../Images/email-f.svg"
import call from "../../Images/call-f.svg"
import skype from "../../Images/skype-f.svg"
import facebook from "../../Images/facebook.svg"
import twitter from "../../Images/twitter1.svg"
import linkedin from "../../Images/linkedin.svg"
import instagram from "../../Images/instagram.svg"
import github from "../../Images/github.svg"

function Footer() {
  return (
    <>
<footer className="footer">
    <div className="container">
        <div className="d-flex flex-row footer-address-main">
            <div className="footer-logo">
                <img src={Logo}/>
            </div>
            <div className="d-flex footer-address">
                <div className="add-ic">
                    <img src={Office1}/>
                </div>
                <div className="add-con">
                    <h5>Corporate Office:</h5>
                    <p>16, Ground floor, Time Square 1 Arcade,Thalej - Silaj Road, Thaltej - Ahmedabad - 380059</p>
                </div>
            </div>
            <div className="d-flex footer-address">
                <div className="add-ic">
                    <img src={Office1}/>
                </div>
                <div className="add-con">
                    <h5>Registered Office:</h5>
                    <p>D-101, Elanza Crest, Nr.Sigma House, Sindhubhavan road, Bodakdev, Thaltej Ahmedabad – 380059</p>
                </div>
            </div>
        </div>
    </div>
    <div className="col-md-12 col-sm-12">
        <hr/>
    </div>
    <div className="container">
        <div className="d-flex flex-row footer-link-main">
            <div className="col-lg-3 col-md-6 col-sm-12 col-12 footer-link ftr__list">
                <h5>Company</h5>
                <ul>
                    <li><a href="#" className="lear-more-l">About Us</a></li>
                    <li><a href="#" className="lear-more-l">Why PragetX?</a></li>
                    <li className="hiring-link blink-menu"><a href="#" className="lear-more-l blink-active">Career</a> <span className="hiring">We Are Hiring</span></li>
                    <li><a href="#" className="lear-more-l">Blog</a></li>
                </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-12 footer-link ftr__list">
                <h5>Services</h5>
                <ul>
                    <li><a href="#" className="lear-more-l">Software Development</a></li>
                    <li><a href="#" className="lear-more-l">Digital Marketing</a></li>
                    <li><a href="#" className="lear-more-l">UI/UX Design</a></li>
                    <li><a href="#" className="lear-more-l">Enterprise Solution</a></li>
                    <li><a href="#" className="lear-more-l">Web Development</a></li>
                    <li><a href="#" className="lear-more-l">App Development</a></li>
                    <li><a href="#" className="lear-more-l">Database Management</a></li>
                    <li><a href="#" className="lear-more-l">Cloud Solution</a></li>
                    <li><a href="#" className="lear-more-l">Branding</a></li>
                </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-12 footer-link ftr__list">
                <h5>Hire Developer</h5>
                <ul>
                    <li><a href="#" className="lear-more-l">Hire Software Development</a></li>
                    <li><a href="#" className="lear-more-l">Hire Digital Marketing</a></li>
                    <li><a href="#" className="lear-more-l">Hire UI/UX Design</a></li>
                    <li><a href="#" className="lear-more-l">Hire Enterprise Solution</a></li>
                    <li><a href="#" className="lear-more-l">Hire Web Development</a></li>
                    <li><a href="#" className="lear-more-l">Hire App Development</a></li>
                    <li><a href="#" className="lear-more-l">Hire Database Management</a></li>
                    <li><a href="#" className="lear-more-l">Hire Cloud Solution</a></li>
                    <li><a href="#" className="lear-more-l">Hire Branding</a></li>
                </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-12 footer-link ftr__list">
                <h5>Our Casestudy</h5>
                <ul>
                    <li><a href="#" className="lear-more-l">Hire Software Development</a></li>
                    <li><a href="#" className="lear-more-l">Hire Digital Marketing</a></li>
                    <li><a href="#" className="lear-more-l">Hire UI/UX Design</a></li>
                    <li><a href="#" className="lear-more-l">Hire Enterprise Solution</a></li>
                    <li><a href="#" className="lear-more-l">Hire Web Development</a></li>
                    <li><a href="#" className="lear-more-l">Hire App Development</a></li>
                    <li><a href="#" className="lear-more-l">Hire Database Management</a></li>
                    <li><a href="#" className="lear-more-l">Hire Cloud Solution</a></li>
                    <li><a href="#" className="lear-more-l">Hire Branding</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div className="footer-contact">
        <div className="container">
            <div className="d-flex flex-row">
                <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className="f-skype">
                        <a className="d-flex" href="#">
                            <span>
                                <img src={skype}/>
                            </span>
                            pragetX
                        </a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 f-border">
                    <div className="f-skype">
                        <a className="d-flex" href="#">
                            <span>
                                <img src={call}/>
                            </span>
                            +91-846-021-8989
                        </a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className="f-skype">
                        <a className="d-flex" href="mailto://hello@pragetx.com">
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
    <div className="container">
        <div className="d-flex flex-row">
            <div className="col-lg-8 col-md-8 col-sm-12 copy-right">
                <p><span>© 2022 <a href="#" target="_new">Pragetx Technologis</a> All rights reserved.</span></p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 social-icon">
                <a href="https://github.com/PragetX-Technologies" target={'_blank'}><img src={github}/></a>
                <a href="https://www.linkedin.com/company/pragetx" target={'_blank'}><img src={linkedin}/></a>
                <a href="https://twitter.com/pragetx" target={'_blank'}><img src={twitter}/></a>
                <a href="https://www.instagram.com/pragetx_technologies/?hl=am-et"  target={'_blank'}><img src={instagram}/></a>
                <a href="https://www.facebook.com/PragetX/" target={'_blank'}><img src={facebook}/></a>
            </div>
        </div>
    </div>
</footer>
</>

  )
}

export default Footer