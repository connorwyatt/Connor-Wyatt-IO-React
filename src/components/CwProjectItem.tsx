import React, {StatelessComponent} from 'react';
import {IProject} from '../interfaces';
import './CwProjectItem.scss';
import {Link} from 'react-router-dom';

interface IProps {
  id: string;
  project: IProject;
}

export const CwProjectItem: StatelessComponent<IProps> = ({id, project}) => {
  return <div className="cw-project-item">
    <h2>{project.name}</h2>

    {project.imageUrl && <img className="cw-project-item--image"
                              src={project.imageUrl}
                              alt={'Image for ' + project.name}/>}

    <p>{project.description}</p>

    <p><Link to={`/projects/${id}`}>Read more</Link></p>
  </div>;
};
