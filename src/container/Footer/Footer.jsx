import React from 'react';

import { SubHeading } from '../../components'
// import {Whats} from '../../assets/whatsapp.svg'
import { FiInstagram } from 'react-icons/fi'
import { BsWhatsapp } from 'react-icons/bs'

// import { images } from '../../constants'

import './Footer.css';
import { images } from '../../constants';

const Footer = () => (
  <div className="app__footer section__padding" id="contact01">
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <a href="https://api.instagram.com/handyman.servicos271/" target="_back">
          <img style={{ width:"60px", height:"60px"}}  src={images.insta} alt="" />
        </a>
        
        <p className="app__footer-headtext"><a href="#menu">Instagram</a></p>
        <p className="p__opensans02">Siga nos em nosso instagram, periodicamente postamos diversas referências de trabalhos.</p>
      </div>

      {/* <p className="p__opensans02">&quot;Profissionais treinados para executar o maior número de serviços para deixar sua casa ou escritório totalmente funcional!&quot;</p> */}



      {/* <a href="https://api.whatsapp.com/send?phone=556199619-5198&text=Olá,%20Gostaria%20de%20fazer%20um%20orçamento.%20" target="_back">
            <img src={images.whats} alt="" />
          </a>
        <h1 className="app__footer-headtext">Contatos</h1>
        <p className='p__opensans02'>Marido de Aluguel Taguatinga sul, Brasilia-DF.</p>
        <p className='p__opensans03'>061 9 9619-5198</p>
        {/* <p className='p__opensans02'>+1 212-344-1230</p> */}



        {/* <img src={images.gericht} alt="footer_logo" /> */}
        {/* <p className="app__footer-headtext01"><a href="#menu">HANDYMAN</a></p>
        <p className="p__opensans02">&quot;Profissionais treinados para executar o maior número de serviços para deixar sua casa ou escritório totalmente funcional!&quot;</p> */}
        {/* <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} alt="" /> */}



      <div className='app__footer-links_logo'>
      <a href="https://api.whatsapp.com/send?phone=556199619-5198&text=Olá,%20Gostaria%20de%20fazer%20um%20orçamento.%20" target="_back">
            <img style={{ width:"90px", height:"90px"}}  src={images.whats} alt="" />
          </a>
        <h1 className="app__footer-headtext">Contatos</h1>
        <p className='p__opensans02'>Mende uma messagem ou ligue, Contato:</p>
        <a className='p__opensans03'href="tel:061 9 9619-5198">061 9 9619-5198</a>
        
        
        <div className="app__footer-links_icons">
          {/* <a href="https://api.whatsapp.com/send?phone=556199619-5198&text=Olá,%20Gostaria%20de%20fazer%20um%20orçamento.%20" target="_back">
            <BsWhatsapp style={{ color: '#00ff00' }} />
          </a> */}
          
          {/* <FiTwitter /> */}
          {/* <a href="https://api.instagram.com/handyman.servicos271/" target="_back">
            <FiInstagram style={{ color: '#ff4da6' }} />
          </a>
           */}
        </div>
      </div>

      <div className="app__footer-links_work" id="contact01">
  
          <img style={{ width:"60px", height:"60px"}} src={images.map} alt="" />

        <h1 className="app__footer-headtext">Endereço</h1>
        {/* <p className="p__opensans02">Segunda-Domingo: 08:00 am - 17:00 pm</p> */}
        {/* <p className="p__opensans02">08:00 am - 17:00 pm</p> */}
        
        <p className="p__opensans02">Marido de Aluguel - Taguatinga sul, Brasilia-DF.</p>
      </div>
    </div>
    
    <SubHeading   title=""  />
    <div className="footer__copyright">
      <p className="p__opensans02">2022 Handyman. Todos os direitos reservados.</p>
    </div>
    
  </div>
);

export default Footer;
