import React, {Component} from 'react';
import './CwAppRoot.scss';
import {CwFooter} from './CwFooter';
import {CwHeader} from './CwHeader';
import {CwHome} from './CwHome';

export class CwAppRoot extends Component<null, null> {
  render() {
    return <div>
      <span className="cw-app-root--header"><CwHeader/></span>
      <span className="cw-app-root--main"><CwHome/></span>
      <span className="cw-app-root--footer"><CwFooter/></span>
    </div>;
  }
}
