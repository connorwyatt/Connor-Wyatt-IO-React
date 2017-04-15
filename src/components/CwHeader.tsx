import React, {StatelessComponent} from 'react';
import {Link, NavLink} from 'react-router-dom';
import './CwHeader.scss';

export const CwHeader: StatelessComponent<void> = () => {
  const links: Array<{name: string; url: string;}> = [
    {name: 'About Me', url: '/about-me'},
    {name: 'Contact Me', url: '/contact-me'},
    {name: 'Projects', url: '/projects'}
  ];

  const linkElements = links.map(link => {
    return <NavLink to={link.url}
                    className="cw-header--link"
                    activeClassName="cw-header--link__active"
                    key={link.url}>{link.name}</NavLink>;
  });

  return <header className="cw-header">
    <div className="cw-header--container">
      <span className="cw-header--branding">
        <Link to="/">
          <h1 className="cw-header--title">
            <span className="cw-header--title__bold">Connor</span> Wyatt IO
          </h1>
        </Link>
      </span>
      <nav className="cw-header--links">
        {linkElements}
      </nav>
    </div>
  </header>;
};
