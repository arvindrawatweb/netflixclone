import React from "react";
import logo from '../logo/Netflix-Logo.svg';
import '../Layout/style.css';
import { BiChild , BiSlideshow , BiVideoRecording , BiTv , BiVideo} from "react-icons/bi";
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { Link } from "react-router-dom";
const Header=()=>
{
return <>
<nav className="postitionss navbar bg_nav navbar-expand-lg ">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">
      <img className="netlogo" src={logo}/>
    </Link>
    <button
      className="navbar-toggler bbbbbbttt"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation" style={{'color':'white'}}>
     <BsFillMenuButtonWideFill/>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      
      
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link nvg_clr fw-bold active" aria-current="page" to="/">
            Media Center
          </Link>
        </li>
        
      </ul>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link nvg_clr fw-bold active" aria-current="page" href="#">
            English
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link nvg_clr" href="#">
           IN india
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link nvg_clr" href="#">
          Newsroom
          </a>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle nvg_clr"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Resources
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a
            className="nav-link nvg_clr me-2 btn-sm btn-outline-primary apply_btn " 
            href="#"
          >
            Apply
          </a>
        </li>

        <li className="nav-item">
          <a
            className="nav-link btn-sm btn-outline-primary login_btn" 
            href="#"
          >
            press Log In
          </a>
        </li>

        {/* <li className="nav-item">
          <a
            className="nav-link btn btn-outline-primary login_btn" 
            href="#"
          >
           
          </a>
        </li> */}
      </ul>


     
    </div>
  </div>
</nav>

</>
}
export default Header;
