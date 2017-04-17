import React, {StatelessComponent} from 'react';
import './CwLoading.scss';

export const CwLoading: StatelessComponent<void> = () => {
  return <div className="cw-loading">
    <div className="cw-loading--circle-1"/>
    <div className="cw-loading--circle-2"/>
    <div className="cw-loading--circle-3"/>
  </div>;
};
