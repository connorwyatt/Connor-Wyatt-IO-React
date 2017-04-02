import React from 'react';
import CwHeader from './CwHeader.jsx';
import CwFooter from './CwFooter.jsx';

export default class CwAppRoot extends React.Component {
  render() {
    return <div>
      <CwHeader/>
      <CwFooter/>
    </div>;
  }
}
