import React, {Component} from 'react';
import {CwHeader} from './CwHeader';
import CwHome from './CwHome';
import {CwFooter} from './CwFooter';

import './CwAppRoot.scss';

export default class CwAppRoot extends Component {
  render() {
    return <div>
      <span className="cw-app-root--header"><CwHeader/></span>
      <span className="cw-app-root--main"><CwHome/></span>
      <span className="cw-app-root--footer"><CwFooter/></span>
    </div>;
  }
}
