import React from 'react';
import { SocialLinks } from '../components/SocialLinks';
import { ContentPane } from '../components/ContentPane';

export class About extends React.Component {
  public render() {
    return (
      <ContentPane className="text-center">
        <header>
          <h1 className="text-2xl font-mono font-semibold pb-3">Zina Olson</h1>
        </header>
        <h3 className="text-lg pb-6 font-light pt-6">(More content coming)</h3>
        <SocialLinks />
      </ContentPane>
    );
  }
}
