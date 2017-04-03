import React from 'react';

import './CwHeroImage.scss';

const CwHeroImage = ({children, src}) => (
  <div className="cw-hero-image" style={{backgroundImage: `url(${src})`}}>
    {children}
  </div>
);

CwHeroImage.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.element,
    React.PropTypes.arrayOf(React.PropTypes.element)
  ]),
  src: React.PropTypes.string.isRequired
};

export default CwHeroImage;
