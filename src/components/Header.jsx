import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
import { Link } from "react-scroll";
// import "../index.css"
const Header = () => {

  const [menuOpened,setMenuOpened]=useState(false);
  const getMenuStyles=(menuOpened)=>{
    if(document.documentElement.clientWidth<=800){
      return {
        right: !menuOpened && "-100%"
      }
    }
  }

  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img className="main-logo" src="./Homely.png" alt="logo" width={130} />
      <OutsideClickHandler onOutsideClick={()=>setMenuOpened(false)}>
        <div className="flexCenter h-menu" 
        style={getMenuStyles(menuOpened)}>
          <Link to="residencies" smooth={true} spy={true}
          offset={-70}
          duration= {5}>Residencies</Link>
          <Link to="value" smooth={true} spy={true}
          offset={-70}
          duration= {5}>Our Value</Link>
          <Link to="contact" smooth={true} spy={true}
          offset={-70}
          duration= {5}>Contact Us</Link>
          <Link to="getStarted" smooth={true} spy={true}
          offset={-70}
          duration= {5}>Get Started</Link>
          <button className="button">
            <Link to="contact" smooth={true} spy={true}
            offset={70}
            duration= {5}>Contact</Link>
          </button>
        </div>
        </OutsideClickHandler>
        <div className="menu-icon" onClick={()=>setMenuOpened((prev)=> !prev)}>
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
