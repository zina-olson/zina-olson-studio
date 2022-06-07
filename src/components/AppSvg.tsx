import React, { ReactElement } from 'react';
import { AppSvgTypes, AppSvgs } from '../logos/LogoTypes';
import { isDarkMode } from '../utilities/DarkMode';

export interface GetterParams extends React.SVGProps<ReactElement> {
  type: AppSvgTypes;
  color?: string;
}

export class AppSvg extends React.Component<GetterParams> {
  public render() {
    const logoGetter = AppSvgs[this.props.type];
    const props = { ...this.props };
    if (!logoGetter) {
      throw new Error(
        'Unable to find custom logo getter for ' + this.props.type
      );
    }

    if (!props.color) {
      if (isDarkMode()) {
        props.color = '#DBD9D4';
      } else {
        props.color = '#1A0609';
      }
    }

    if (!props.width && !props.height) {
      props.width = '55px';
      props.height = '55px';
    }

    return logoGetter(props.color, props);
  }
}
