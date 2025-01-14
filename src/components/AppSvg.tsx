import React, { ReactElement, SVGProps } from 'react';
import { AppSvgTypes, AppSvgs } from './svg/AppSvgs';
import { isDarkMode } from '../utilities/DarkMode';
import { DarkModeComponent } from './helpers/DarkMode';

export interface AppSvgParams extends React.SVGProps<SVGSVGElement> {
  type: AppSvgTypes;
  color?: string;
}

export class AppSvg extends DarkModeComponent<AppSvgParams> {
  public render(): ReactElement {
    const logoGetter = AppSvgs[this.props.type];
    const props: SVGProps<SVGSVGElement> = { ...this.props };
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
