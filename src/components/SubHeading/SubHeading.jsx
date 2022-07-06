import React from 'react';

import { images } from '../../constants'

const SubHeading = ({ title, title2, title3 }) => (
  <div style={{ marginBottom: '1rem' }}>
    <p className="p__cormorant">{title}</p>
    <p className="p__cormorant2">{title2}</p>
    <p className="p__cormorant3">{title3}</p>
    <img src={images.machine} alt="machine" className="spoon_img" />
  </div>
);


export default SubHeading;
