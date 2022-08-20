import React, { ReactElement } from 'react';
import { ContentPane } from '../layout/ContentPane';
import { SocialLinks } from '../SocialLinks';

export class Contact extends React.Component {
  public render(): ReactElement {
    return (
      <ContentPane className="text-center">
        <header>
          <h1 className="text-2xl font-mono font-semibold pb-3">
            Contact Information
          </h1>
        </header>

        <h3 className="text-lg pb-6 font-light pt-6">
          Email: &nbsp; <a href="mailto:rvazina@gmail.com">rvazina@gmail.com</a>
        </h3>
        <SocialLinks />
      </ContentPane>
    );
  }
}
