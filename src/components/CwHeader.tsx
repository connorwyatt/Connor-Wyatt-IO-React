import React, {StatelessComponent} from 'react';
import './CwHeader.scss';

export const CwHeader: StatelessComponent<null> = () => {
  const links = [].map(link => {
    return <a className="cw-header--link" key={link}>{link}</a>;
  });

  return <header className="cw-header">
    <div className="cw-header--container">
      <span className="cw-header--branding">
        <h1 className="cw-header--title">
          <span className="cw-header--title__bold">Connor</span> Wyatt IO
        </h1>
      </span>
      <nav className="cw-header--links">
        {links}
      </nav>
    </div>
  </header>;
};
