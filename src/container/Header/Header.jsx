import React from 'react';
import { SubHeading } from '../../components'
import { images } from '../../constants'

import './Header.css';



const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title3="Consertos & Reformas com garantia" />
      <h1 className="app__header-h1">Marido De Aluguel </h1>
      <h1 className="app__header-h2">Christiano Carvalho </h1>
      
      <p className="p__opensans2" style={{margin: '2rem 0'}}>
      Eletricista, encanador, montador, pintor, pedreiro, instalador ou desemtupidor
      Possuimos serviços em reparos, consertos e reformas para residência, comércio e condomínio. 
      </p>
      <button type="button" className="custom__button"><a href="#menu">Explore Menu</a></button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
