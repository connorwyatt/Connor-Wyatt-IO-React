import React, {Component} from 'react';

interface IProps {}

interface IState {
  year: number;
}

export default class CwFooter extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {year: new Date().getFullYear()};
  }

  render() {
    return <footer>
      <span>Copyright &copy; Connor Wyatt {this.state.year} - All rights reserved.</span>
    </footer>;
  }
}
