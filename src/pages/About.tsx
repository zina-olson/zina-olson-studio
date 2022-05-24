import React from 'react';
import { githubButton } from '../social/githubButton';
import { linkedinButton } from '../social/linkedinButton';

export class About extends React.Component {
  public render() {
    return (
      <div>
        <header className="text-center">
          <p className="text-2xl font-mono pb-3">Zina Olson</p>
          <p></p>
          <p className="text-xs">( More content coming soon )</p>
          {githubButton()}
          {linkedinButton()}
        </header>
      </div>
    );
  }
}
