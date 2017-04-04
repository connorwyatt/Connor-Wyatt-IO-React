import React from 'react';
import {CwHeroImage} from './CwHeroImage';

import './CwHome.scss';

const CwHome = () => (
  <div>
    <div className="cw-home--hero-image">
      <CwHeroImage src={'assets/images/mac.jpg'}>
        <div className="cw-home--hero-image-title">Senior \ Web \ Application \ Developer</div>
        <div className="cw-home--hero-image-subtitle">Nottingham, UK</div>
      </CwHeroImage>
    </div>
  </div>
);

export default CwHome;
