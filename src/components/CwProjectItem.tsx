import React, {StatelessComponent} from 'react';
import {IProject} from '../interfaces';
import './CwProjectItem.scss';

interface IProps {
  project: IProject;
}

export const CwProjectItem: StatelessComponent<IProps> = ({project}) => {
  return <div className="cw-project-item">
    <h2>{project.name}</h2>
    {project.imageUrl ? <img className="cw-project-item--image"
                             src={project.imageUrl}
                             alt={'Image for ' + project.name}/> : null}
    <p>{project.description}</p>
  </div>;
};
