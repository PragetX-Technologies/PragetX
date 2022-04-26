import React, { useEffect, useState } from 'react'
import '../../CSS/Admin.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom";
// import user from '../../Asset/user-ic.png'
import logo from '../../Images/logo.svg'


function Sidebar(props: { setLogin: (arg0: boolean) => void; }) {
    const navigate = useNavigate()
    const [isLoggedIn, setLoggin] = useState(false);
    const [showSubmenu, setShowSubmenu] = useState(false)

    useEffect(() => {
        let logIn = localStorage.getItem('token');
        if(!logIn){
            navigate('/')
        }
      }, [isLoggedIn])
    
    useEffect(() => {
        if (localStorage.getItem("token") !== null) {
        setLoggin(true);
        } else {
          setLoggin(false);
        }
    }, [isLoggedIn]);

    const location = useLocation()


    console.log(location.pathname)

    const closeNav = () => {
        document!.getElementById("mySidenav")!.style.animation = "collapse 0.3s forwards";
        //closeBtn
        document!.getElementById("closeBtn")!.style.animation = "hide 0.3s";
        //Overlay
        document!.getElementById("overlay")!.style.animation = "hide 0.3s";

        setTimeout(() => {
            document!.getElementById("closeBtn")!.style.display = "none";
            document!.getElementById("overlay")!.style.display = "none";
            //Reset Menus
            document!.getElementById("main-container")!.style.animation = "";
            document!.getElementById("main-container")!.style.transform = "translateX(0px)";
            document!.getElementById("sub-container")!.style.animation = "";
            document!.getElementById("sub-container")!.style.transform = "translateX(380px)";
        }, 300)

    }
    const openNav = () => {
        document!.getElementById("mySidenav")!.style.animation = "expand 0.3s forwards";
        //closeBtn
        document!.getElementById("closeBtn")!.style.display = "block";
        document!.getElementById("closeBtn")!.style.animation = "show 0.3s";
        //Overlay
        document!.getElementById("overlay")!.style.display = "block";
        document!.getElementById("overlay")!.style.animation = "show 0.3s";
        console.log("hey")
    }


    const openSubmenu1 = () => {
        setShowSubmenu(prev => !prev)
        console.log("menu open")
    }
    
    const userlogout = () =>{
        localStorage.removeItem('token')
        props.setLogin(false)
        navigate('/')
    }

    return (
        <div className='pt-5'>
            <div id="overlay" ></div>
            <div id="closeBtn" onClick={() => closeNav()}>&times;</div>
            <div className="sidenav" id="mySidenav">
                <div id="main-container">
                    <div className='d-flex m-auto p-3' >    
                    <img style={{width:"15rem"}} className="m-auto" src={logo} alt="" />
                    </div>
                    <a href="#" onClick={() => { openSubmenu1() }}>
                            <div className="sidenavRow">
                                <div>Driver Pay</div>
                                <i className="fas fa-chevron-right" style={{ color: "#8e9090" }}></i>
                            </div>
                        </a>
                    {
                        showSubmenu &&
                        <div className='px-5'>
                         <a href="/Driver" onClick={() => { openSubmenu1() }}>
                        <div className="sidenavRow">
                            <div>Driver List</div>
                            <i className="fas fa-chevron-right" style={{ color: "#8e9090" }}></i>
                        </div>
                    </a>
                    <a href="/BaseActivity" onClick={() => { openSubmenu1() }}>
                        <div className="sidenavRow">
                            <div>Activity List</div>
                            <i className="fas fa-chevron-right" style={{ color: "#8e9090" }}></i>
                        </div>
                    </a>
                    <a href="/EmployeeGroupList" onClick={() => { openSubmenu1() }}>
                        <div className="sidenavRow">
                            <div>Employee Group List</div>
                            <i className="fas fa-chevron-right" style={{ color: "#8e9090" }}></i>
                        </div>
                    </a>
                    <a href="/Trip" onClick={() => { openSubmenu1() }}>
                        <div className="sidenavRow">
                            <div>Trip List</div>
                            <i className="fas fa-chevron-right" style={{ color: "#8e9090" }}></i>
                        </div>
                    </a>
                        </div>
                    }
                </div>
                <div id="sub-container">
                    <div id="mainMenu">
                        <i className="fas fa-chevron-left" style={{ color: "#8e9090" }}></i> MAIN MENU
                    </div>
                    <hr />
                    <div id="sub-container-content">

                    </div>
                </div>
            </div>


            <header className="header-main-dash">
                <div className="header-menu-btn">
                    <div onClick={() => { openNav() }} style={{ fontSize: "30px", cursor: "pointer", display: "inline-block" }}>
                        &#9776;
                    </div>
                </div>
                <div className="header-right-side">
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            {/* <img src={user} /> */}
                            Renish Patoliya
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="#">Profile</a></li>
                            <li><a className="dropdown-item" href="#" onClick={()=>userlogout()} >Log Out</a></li>
                        </ul>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Sidebar