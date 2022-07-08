import React from 'react';

import { SubHeading } from '../../components'
import { images } from '../../constants'

import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding" >
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef2} alt="chef_image" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Palavras do Chefe" />
      <h1 className="headtext__cormorant3">Nossa Meta</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">Nossa meta é sua satisfação total, para isso prestamos serviços de qualidade para que sua demanda seja sanada,</p>
        </div>
          <p className="p__opensans"> com melhor custo benefício do mercado. Os técnicos são profissionais avaliados nas suas capacidades, competências e habilidades em sanar de maneira rápida e segura os problemas que lhes são solicitados.</p>
      </div>

      <div className="app__chef-sign">
        <p>Chirstiano Carvalho</p>
        <p className="p__opensans">CEO & fundador</p>
        {/* <img src={images.sign} alt="sign_image" /> */}
      </div>

    </div>

  </div>
);

export default Chef;
