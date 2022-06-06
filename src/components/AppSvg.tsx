import React, { FC, ReactElement } from 'react';
import { AppSvgTypes, AppSvgs } from '../logos/LogoTypes';
import { isDarkMode } from '../utilities/DarkMode';

export interface GetterParams extends React.SVGProps<ReactElement> {
  type: AppSvgTypes;
  color?: string;
}

export const CustomLogo: FC<GetterParams> = (
  props: GetterParams
): ReactElement => {
  const logoGetter = AppSvgs[props.type];
  let color = props.color;
  if (!logoGetter) {
    throw new Error('Unable to find custom logo getter for ' + props.type);
  }

  if (!color) {
    if (isDarkMode()) {
      color = '#DBD9D4';
    } else {
      color = '#1A0609';
    }
  }

  return logoGetter(color, props);
};
