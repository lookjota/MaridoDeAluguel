import React from 'react';
import { SubHeading } from '../../components'
import { images } from '../../constants'

import './Header.css';



const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title3="Construção do básico ao acabamento" />
      <h1 className="app__header-h1">Marido De Aluguel </h1>
      <br />
      <h1 className="app__header-h2">Christiano Carvalho </h1>
      
      <p className="p__opensans2" style={{margin: '2rem 0'}}>
      Serviços de qualidade com preço acessível. Venha fazer seu orçamento, nós estamos aqui justamente para te ajudar a realizar os seus sonhos! 
      </p>
      <button type="button" className="custom__button"><a href="#menu">Explore Menu</a></button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
