import React, {PropTypes, StatelessComponent} from 'react';

import './CwHeroImage.scss';

interface IProps {
  src: string;
}

export const CwHeroImage: StatelessComponent<IProps> = ({children, src}) => {
  return <div className="cw-hero-image" style={{backgroundImage: `url(${src})`}}>
    { children && (
      <div className="cw-hero-image--content">{children}</div>
    )}
  </div>;
};
