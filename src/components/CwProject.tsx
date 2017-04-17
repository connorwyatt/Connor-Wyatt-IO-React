import firebase from 'firebase';
import React, {Component, ReactElement} from 'react';
import {RouteComponentProps} from 'react-router';
import {Link} from 'react-router-dom';
import 'rxjs/add/observable/fromPromise';
import {Observable} from 'rxjs/Observable';
import {IProject} from '../interfaces/IProject';
import {CwIcon} from './CwIcon';
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
    let content: ReactElement<HTMLElement>;

    if (this.state.project === null) {
      content = <div className="cw-project--loading"><CwLoading/></div>;
    } else {
      content = this.renderProject();
    }

    return <div className="cw-project">{content}</div>;
  }

  private renderProject(): ReactElement<HTMLElement> {
    const project = this.state.project as IProject;

    return <div className="cw-project--grid">
      <div className="cw-project--grid-item">
        <Link className="cw-project--back-link" to="/projects">
          <CwIcon className="cw-project--back-icon" icon="arrow"/>
        </Link>

        <h2 className="cw-project--title">{project.name}</h2>

        {project.imageUrl && <img className="cw-project--image"
                                  src={project.imageUrl}
                                  alt={'Image for ' + project.name}/>}

        <p>{project.description}</p>

        {project.link && <p><a href={project.link}>See more</a></p>}
      </div>
    </div>;
  }
}
