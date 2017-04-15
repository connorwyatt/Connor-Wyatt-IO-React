import firebase from 'firebase';
import React, {Component, ReactElement} from 'react';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/delay';
import {Observable} from 'rxjs/Observable';
import {IProject} from '../interfaces';
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

  public render(): ReactElement<HTMLDivElement> {
    let content: ReactElement<HTMLElement> = <div>Loading...</div>;

    if (this.state.projects !== null) {
      content = this.getProjectList(this.state.projects);
    }

    return <div>{content}</div>;
  }

  private getProjectList(projects: Dictionary<IProject>) {
    const items = Object.keys(projects).map(id => {
      const project = projects[id];

      return <li className="cw-projects-list--item-container" key={id}>
          <span className="cw-projects-list--item">
            <CwProjectItem project={project}/>
          </span>
      </li>;
    });

    return <ul className="cw-projects-list--items-list">{items}</ul>;
  }
}
