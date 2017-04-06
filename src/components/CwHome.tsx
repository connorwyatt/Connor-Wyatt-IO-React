import React, {StatelessComponent} from 'react';
import {CwHeroImage} from './CwHeroImage';
import './CwHome.scss';

export const CwHome: StatelessComponent<void> = () => (
  <div>
    <div className="cw-home--hero-image">
      <CwHeroImage src={'assets/images/mac.jpg'}>
        <div className="cw-home--hero-image-title">Senior \ Web \ Application \ Developer</div>
        <div className="cw-home--hero-image-subtitle">Nottingham, UK</div>
      </CwHeroImage>
    </div>

    <div className="cw-home--grid">
      <div className="cw-home--grid-item">
        <div className="cw-home--panel">
          <h2>Who Am I?</h2>
          <p>I am a Senior Web Application Developer that works with front-end and back-end systems as well as graphic
            design.</p>
          <p>Because of this I am capable of designing, coding and maintaining modern, tailored, responsive and
            breath-taking websites from start to finish.</p>
        </div>
      </div>
    </div>
  </div>
);
