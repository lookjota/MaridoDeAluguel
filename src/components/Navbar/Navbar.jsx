import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi'


import { FiInstagram } from 'react-icons/fi'
import { BsWhatsapp } from 'react-icons/bs'

import { AiOutlineClose } from 'react-icons/ai'


// import images from '../../constants/images'
import './Navbar.css';

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false)

  return (
  <nav className="app__navbar app__bg" >
    <div className="app__navbar-logo">
      <p className="p__opensans-logo"><a href="#menu">HANDYMAN</a></p>
    </div>
    <ul className="app__navbar-links">
      <li className="p__opensans"><a href="#home">Sobre</a></li>
      <li className="p__opensans"><a href="#menu">Serviços</a></li>
      <li className="p__opensans"><a href="#gallery">Galeria</a></li>
      <li className="p__opensans"><a href="#meta">Meta</a></li>
      <li className="p__opensans"><a href="#contact01">Contato</a></li>
    </ul>
    <div className="app__navbar-login">
      {/* <a href="https://wa.me/5561981732307" target="_blank" className="p__opensans-social_01" ><BsWhatsapp /></a> */}
      <a href="https://api.whatsapp.com/send?phone=556199619-5198&text=Olá,%20Gostaria%20de%20fazer%20um%20orçamento.%20" target="_blank" className="p__opensans-social_01" ><BsWhatsapp /></a>
      {/* https://web.whatsapp.com/send?phone=5599111112222 */}
    {/* <div /> */}
    <a href="https://api.instagram.com/handyman.servicos271/" target="_blank" className="p__opensans-social_02"><FiInstagram /></a>
      {/* <FiInstagram className="app__footer-links_icons"/> */}
    </div>
    {/* 556199619-5198 */}

    <div className="app__navbar-smallscreen">
      <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)}/>   
      
      {toggleMenu && (
      <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
        <AiOutlineClose fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
        <ul className="app__navbar-smallscreen_links">
          <li className="p__opensans" onClick={() => setToggleMenu(false)}><a href="#home">Sobre</a></li>
          <li className="p__opensans" onClick={() => setToggleMenu(false)}><a href="#menu">Serviços</a></li>
          <li className="p__opensans" onClick={() => setToggleMenu(false)}><a href="#gallery">Galeria</a></li>
          <li className="p__opensans" onClick={() => setToggleMenu(false)}><a href="#meta">Meta</a></li>
          <li className="p__opensans" onClick={() => setToggleMenu(false)}><a href="#contact01">Contato</a></li>
        </ul>
      </div>
      )}

    </div>
  </nav>
  )
}
export default Navbar;
