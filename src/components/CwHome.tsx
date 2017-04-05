import React, {StatelessComponent} from 'react';
import {CwHeroImage} from './CwHeroImage';
import './CwHome.scss';

export const CwHome: StatelessComponent<null> = () => (
  <div>
    <div className="cw-home--hero-image">
      <CwHeroImage src={'assets/images/mac.jpg'}>
        <div className="cw-home--hero-image-title">Senior \ Web \ Application \ Developer</div>
        <div className="cw-home--hero-image-subtitle">Nottingham, UK</div>
      </CwHeroImage>
    </div>
  </div>
);
