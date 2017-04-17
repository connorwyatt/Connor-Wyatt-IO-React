import React, {StatelessComponent} from 'react';
import {CwIconRegistryService} from '../services/CwIconRegistryService';

interface IProps {
  icon: string;
  className?: string;
}

export const CwIcon: StatelessComponent<IProps> = ({icon, ...rest}) => {
  const iconContents = CwIconRegistryService.getInstance().getIcon(icon);

  return <svg width="100%"
              height="100%"
              viewBox="0 0 32 32"
              dangerouslySetInnerHTML={{__html: iconContents}}
              {...rest}/>;
};
