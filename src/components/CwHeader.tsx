import React, {Component, ReactElement} from 'react';
import {Link, NavLink} from 'react-router-dom';
import './CwHeader.scss';

interface IState {
  isMenuOpen: boolean;
}

export class CwHeader extends Component<void, IState> {
  public constructor() {
    super();

    this.state = {isMenuOpen: false};

    this.toggleMenuOpen = this.toggleMenuOpen.bind(this);
  }

  public render(): ReactElement<HTMLElement> {
    const links: Array<{name: string; url: string;}> = [
      {name: 'About Me', url: '/about-me'},
      {name: 'Contact Me', url: '/contact-me'}
    ];

    return <header className="cw-header">
      <div className="cw-header--container">
        <span className="cw-header--branding">
          <Link to="/">
            <h1 className="cw-header--title">
              <span className="cw-header--title__bold">Connor</span> Wyatt IO
            </h1>
          </Link>
        </span>

        {this.renderNav('main', links)}

        <button
          className="cw-header--dropdown-button"
          onClick={e => this.toggleMenuOpen()}>
          Menu
        </button>

        {this.state.isMenuOpen && this.renderNav('dropdown', links)}
      </div>
    </header>;
  }

  private renderNav(type: string, links: Array<{name: string; url: string}>): ReactElement<HTMLElement> {
    const linkElements = links.map(link => {
      return <NavLink to={link.url}
                      className={`cw-header--${type}-link`}
                      activeClassName={`cw-header--${type}-link__active`}
                      key={link.url}>{link.name}</NavLink>;
    });

    return <nav className={`cw-header--${type}-links`}>
      {linkElements}
    </nav>;
  }

  private toggleMenuOpen(): void {
    this.setState(({isMenuOpen}: IState) => ({isMenuOpen: !isMenuOpen}));
  }
}
