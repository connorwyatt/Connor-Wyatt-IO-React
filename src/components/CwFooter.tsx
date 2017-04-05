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
      <div className="cw-footer--content">
        <div className="cw-footer--section">
          <div className="cw-footer--title">Contact Me</div>

          <div className="cw-footer--linkContainer">
            <a href="mailto:connorwyatt1@gmail.com"
               className="cw-footer--link">
              <span className="cw-footer--linkText">connorwyatt1@gmail.com</span>
            </a>
          </div>

          <div className="cw-footer--linkContainer">
            <a href="https://github.com/connorwyatt"
               className="cw-footer--link">
              <span className="cw-footer--linkText">GitHub</span>
            </a>
          </div>
        </div>
        <div className="cw-footer--section">
          <div className="cw-footer--title">Bio</div>

          <div className="cw-footer--text">I am a huge Formula 1 fan and I enjoy programming in my spare time. I also enjoy photography.</div>
        </div>
      </div>
      <div className="cw-footer--copyright">
        Copyright &copy; Connor Wyatt {this.state.year} - All rights reserved.
      </div>

    </footer>;
  }
}
