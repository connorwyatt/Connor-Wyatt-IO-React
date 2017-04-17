import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {MenuIcon} from '../assets/icons/menu.icon';
import {CwIconRegistryService} from '../services/CwIconRegistryService';
import {CwAboutMe} from './CwAboutMe';
import './CwAppRoot.scss';
import {CwContactMe} from './CwContactMe';
import {CwFooter} from './CwFooter';
import {CwHeader} from './CwHeader';
import {CwHome} from './CwHome';
import {CwProject} from './CwProject';
import {CwProjectsList} from './CwProjectsList';

export class CwAppRoot extends Component<void, void> {
  public componentWillMount(): void {
    const iconService = CwIconRegistryService.getInstance();

    iconService.setIcon('menu', MenuIcon);
  }

  public render() {
    return <Router>
      <div>
        <span className="cw-app-root--header"><CwHeader/></span>
        <span className="cw-app-root--main">
          <Route exact path="/" component={CwHome}/>
          <Route exact path="/about-me" component={CwAboutMe}/>
          <Route exact path="/contact-me" component={CwContactMe}/>
          <Route exact path="/projects" component={CwProjectsList}/>
          <Route exact path="/projects/:projectId" component={CwProject}/>
        </span>
        <span className="cw-app-root--footer"><CwFooter/></span>
      </div>
    </Router>;
  }
}
