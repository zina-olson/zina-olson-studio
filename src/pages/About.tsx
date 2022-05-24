import React from 'react';
import { githubButton } from '../social/githubButton';
import { linkedinButton } from '../social/linkedinButton';

export class About extends React.Component {
  public render() {
    return (
      <div>
        <header className="text-center">
          <p className="text-2xl font-mono font-semibold pb-3">Zina Olson</p>
          <p></p>
          <p className="text-xs font-semibold">( More content coming soon )</p>
          <p className="space-x-4 p-12">
            {githubButton()}
            {linkedinButton()}
          </p>
        </header>
      </div>
    );
  }
}
