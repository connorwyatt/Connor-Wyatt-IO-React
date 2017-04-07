import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {CwAboutMe} from './CwAboutMe';
import './CwAppRoot.scss';
import {CwContactMe} from './CwContactMe';
import {CwFooter} from './CwFooter';
import {CwHeader} from './CwHeader';
import {CwHome} from './CwHome';

export class CwAppRoot extends Component<void, void> {
  render() {
    return <Router>
      <div>
        <span className="cw-app-root--header"><CwHeader/></span>
        <span className="cw-app-root--main">
          <Route exact path="/" component={CwHome}/>
          <Route path="/about-me" component={CwAboutMe}/>
          <Route path="/contact-me" component={CwContactMe}/>
        </span>
        <span className="cw-app-root--footer"><CwFooter/></span>
      </div>
    </Router>;
  }
}
