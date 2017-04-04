import React, {Component} from 'react';

export default class CwFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {year: new Date().getFullYear()};
  }

  render() {
    return <footer>
      <span>Copyright &copy; Connor Wyatt {this.state.year} - All rights reserved.</span>
    </footer>;
  }
}
