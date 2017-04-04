import React, {Component} from 'react';
import './CwFooter.scss';

interface IProps {}

interface IState {
  year: number;
}

export class CwFooter extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {year: new Date().getFullYear()};
  }

  render() {
    return <footer className="cw-footer">
      <div className="cw-footer--copyright">
        Copyright &copy; Connor Wyatt {this.state.year} - All rights reserved.
      </div>

    </footer>;
  }
}
