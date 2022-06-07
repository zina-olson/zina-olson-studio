import React from 'react';
import { ExternalLink } from './ExternalLink';
import { AppSvg } from './AppSvg';
import { AppSvgTypes } from '../logos/LogoTypes';

export class SocialLinks extends React.Component {
  public render() {
    return (
      <div className="mx-auto mb-11 mt-6 p-6 w-96">
        <div className="max-h-16 overflow-clip flex flex-row">
          <div className="left-spacing-area flex-grow flex-col"></div>
          <ExternalLink
            className="flex-col ml-2 mr-2 w-14"
            dest="https://github.com/zina-olson"
            content={<AppSvg width="106px" type={AppSvgTypes.GitHub} />}
          />
          <ExternalLink
            className="flex-col w-14 ml-2 mr-2 pt-[2px]"
            dest="https://www.linkedin.com/in/zinaolson"
            content={<AppSvg width="48px" type={AppSvgTypes.LinkedIn} />}
          />
          <div className="right-spacing-area flex-grow flex-col"></div>
        </div>
      </div>
    );
  }
}
