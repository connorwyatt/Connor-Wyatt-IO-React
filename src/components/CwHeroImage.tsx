import React, { PropTypes, StatelessComponent } from 'react';

import './CwHeroImage.scss';

interface IPropTypes {
  src: string;
}

const CwHeroImage: StatelessComponent<IPropTypes> = ({ children, src }) => (
  <div className="cw-hero-image" style={{ backgroundImage: `url(${src})` }}>
    {children}
  </div>
);

CwHeroImage.propTypes = {
  src: PropTypes.string.isRequired
};

export default CwHeroImage;
