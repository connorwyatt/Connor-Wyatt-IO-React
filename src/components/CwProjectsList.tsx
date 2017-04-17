import firebase from 'firebase';
import React, {Component, ReactElement} from 'react';
import {Link} from 'react-router-dom';
import 'rxjs/add/observable/fromPromise';
import {Observable} from 'rxjs/Observable';
import {IProject} from '../interfaces';
import {CwLoading} from './CwLoading';
import {CwProjectItem} from './CwProjectItem';
import './CwProjectsList.scss';

interface IState {
  projects: Nullable<Dictionary<IProject>>;
}

export class CwProjectsList extends Component<void, IState> {
  constructor() {
    super();

    this.state = {projects: null};
  }

  public componentDidMount(): void {
    Observable.fromPromise(firebase.database().ref('projects').once('value') as Promise<any>)
      .map(ref => ref.val())
      .subscribe((projects: Dictionary<IProject>) => this.setState({projects}));
  }

  public render(): ReactElement<HTMLElement> {
    let content: ReactElement<HTMLElement>;

    if (this.state.projects === null) {
      content = <div className="cw-projects-list--loading"><CwLoading/></div>;
    } else {
      content = this.renderProjectList(this.state.projects);
    }

    return content;
  }

  private renderProjectList(projects: Dictionary<IProject>): ReactElement<HTMLUListElement> {
    const items = Object.keys(projects).map(id => {
      const project = projects[id];

      return <li className="cw-projects-list--item-container" key={id}>
        <span className="cw-projects-list--item">
          <CwProjectItem id={id} project={project}/>
        </span>
      </li>;
    });

    return <ul className="cw-projects-list--items-list">{items}</ul>;
  }
}
