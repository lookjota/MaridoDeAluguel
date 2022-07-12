import React from 'react';

import { SubHeading } from '../../components'

import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'
import { BsWhatsapp } from 'react-icons/bs'

import { FooterOverlay, Newsletter } from '../../components'
import { images } from '../../constants'

import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="contact01">
    {/* <FooterOverlay /> */}
    {/* <Newsletter /> */}
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contatos</h1>
        <p className='p__opensans02'>Marido de Aluguel Taguatinga sul, Brasilia-DF.</p>
        <p className='p__opensans03'>061 9 9619-5198</p>
        {/* <p className='p__opensans02'>+1 212-344-1230</p> */}
      </div>

      <div className='app__footer-links_logo'>
        {/* <img src={images.gericht} alt="footer_logo" /> */}
        <p className="app__footer-headtext01"><a href="#menu">HANDYMAN</a></p>
        <p className="p__opensans02">&quot;Profissionais treinados para executar o maior número de serviços para deixar sua casa ou escritório totalmente funcional!&quot;</p>
        {/* <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} alt="" /> */}
        <br />
        <SubHeading title=""  />
        <div className="app__footer-links_icons">
          <a href="https://api.whatsapp.com/send?phone=556199619-5198&text=Olá,%20Gostaria%20de%20fazer%20um%20orçamento.%20" target="_back">
            <BsWhatsapp style={{ color: '#00ff00' }} />
          </a>
          
          {/* <FiTwitter /> */}
          <a href="https://api.instagram.com/handyman.servicos271/" target="_back">
            <FiInstagram style={{ color: '#ff4da6' }} />
          </a>
          
        </div>
      </div>

      <div className="app__footer-links_work" id="contact01">
        <h1 className="app__footer-headtext">Horários</h1>
        <p className="p__opensans02">Segunda-Sexta:</p>
        <p className="p__opensans02">08:00 am - 12:00 am</p>
        <p className="p__opensans02">Sabado-Domingo:</p>
        <p className="p__opensans02">07:00 am - 11:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans02">2022 Handyman. Todos os direitos reservados.</p>
    </div>
    
  </div>
);

export default Footer;
