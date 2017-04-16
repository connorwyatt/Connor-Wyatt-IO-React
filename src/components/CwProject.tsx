import firebase from 'firebase';
import React, {Component, ReactElement} from 'react';
import {RouteComponentProps} from 'react-router';
import 'rxjs/add/observable/fromPromise';
import {Observable} from 'rxjs/Observable';
import {IProject} from '../interfaces/IProject';
import {CwLoading} from './CwLoading';
import './CwProject.scss';

interface IProps extends RouteComponentProps<IRouteParamsProps> {
}

interface IRouteParamsProps {
  projectId: string
}

interface IState {
  project: Nullable<IProject>;
}

export class CwProject extends Component<IProps, IState> {
  public constructor() {
    super();

    this.state = {project: null};
  }

  public componentDidMount(): void {
    const projectId = this.props.match.params.projectId;

    Observable.fromPromise(firebase.database().ref('projects').child(projectId).once('value') as Promise<any>)
      .map(ref => ref.val())
      .subscribe((project: IProject) => {
        this.setState({project});
      });
  }

  public render(): ReactElement<HTMLElement> {
    if (this.state.project === null) {
      return <div className="cw-project--loading"><CwLoading/></div>;
    } else {
      return <div>{this.state.project.name}</div>;
    }
  }
}
