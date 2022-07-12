import React from 'react';

import { SubHeading, MenuItem } from '../../components'
import { data, images } from '../../constants'

import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu app__bg flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Satisfação Garantida" />
      <h1 className="headtext__cormorant2">NOSSOS SERVIÇOS</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine flex__center">
        <p className="app__specialMenu-menu_heading">Consertos</p>
        <div className="app__specialMenu_menu_items">
          {data.wines.map((wine, index) => (
            <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu01} alt="menu__img" />
      </div>
      
      <div className="app__specialMenu-menu_cocktails flex__center">
        <p className="app__specialMenu-menu_heading">Reformas</p>
        <div className="app__specialMenu_menu_items">
            {data.cocktails.map((cocktail, index) => (
              <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
            ))}
        </div>
      </div>

    </div>

    <div style={{ marginTop: 15 }}>
      <button type="button" className="custom__button2" >
        <a href="https://api.whatsapp.com/send?phone=556199619-5198&text=Olá,%20Gostaria%20de%20fazer%20um%20orçamento.%20" target="_blank">Pedido de Orçamento</a>
        {/* <a href="https://web.whatsapp.com/send?phone=556199619-5198" target="_back">Pedido de Orçamento</a> */}
      </button>
    </div>

  </div>
);

export default SpecialMenu;
