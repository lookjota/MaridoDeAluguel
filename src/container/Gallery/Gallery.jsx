import React from 'react';

import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'

import { SubHeading } from '../../components'
import { images } from '../../constants'

import './Gallery.css';

const Gallery = () => {
  const scrollRef = React.useRef(null)

  const scroll = (direction) => {
    const {current} = scrollRef
    
    if (direction === 'left') {
      current.scrollLeft -= 300
    } else {
      current.scrollLeft += 300
    }
  }

  return (
  <div className="app__gallery flex__center">
    <div className="app__gallery-content">
      <SubHeading title2="Instagram" />
      <h1 className="headtext__cormorant3" >Galeria</h1>
      <p className="p__opensans" style={{ color: '#000000', marginTop: '2rem', marginBottom: '2rem' }}>Profissional Faz-Tudo, Marido de Aluguel, Reformas e tudo mais, estamos prontos pra lhe atender!</p>
      <button type="button" className="custom__button">Follow</button>
    </div>

    <div className="app__gallery-images">
      <div className="app__gallery-images_container" ref={scrollRef}>
        {[images.gallery01, images.gallery02, images.gallery03, images.gallery04].map((image, index) => (
          <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
            <img src={image} alt="gallery_image" />
            <BsInstagram className="gallery__image-icon" />
          </div>
        ))}
      </div>
      <div className="app__gallery-images_arrows">
        <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
        <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
      </div>
    </div>

  </div>
  )
}
export default Gallery;
