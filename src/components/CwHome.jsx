import React from 'react';
import CwHeroImage from './CwHeroImage';

import './CwHome.scss';

const CwHome = () => (
  <div>
    <div className="cw-home--hero-image">
      <CwHeroImage src={'assets/images/mac.jpg'}>
        <p className="cw-home--hero-image-title">Senior \ Web \ Application \ Developer</p>
        <p className="cw-home--hero-image-subtitle">Nottingham, UK</p>
      </CwHeroImage>
    </div>
  </div>
);

export default CwHome;
