import React, { useState } from 'react';
import { IoMenu, IoClose } from "react-icons/io5";

const Header = () => {
  const [active, setActive] = useState(false);

  const toggleNavbar = () => {
    setActive(!active);
  };

  return (
    <div className={`header ${active ? 'active' : ''}`}>
      
      <p className="headerText">BotNikkk</p>
      
      <div className="navigation-container">
        <a href="#home" onClick={toggleNavbar}><span>HOME</span></a>
        <a href="#about" onClick={toggleNavbar}><span>ABOUT</span></a>
        <a href="#skillset" onClick={toggleNavbar}><span>SKILLSET</span></a>
        <a href="#projects" onClick={toggleNavbar}><span>PROJECTS</span></a>
      </div>
      
      <div className='mobile-container'>
        <span className="mobile-icon" onClick={toggleNavbar}>
            {active ? <IoClose size={30} /> : <IoMenu size={30} />}
        </span>
      </div>
    </div>
  );
};

export default Header;