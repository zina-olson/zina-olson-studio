import React from 'react';
import { githubButton } from '../social/githubButton';
import { linkedinButton } from '../social/linkedinButton';

export class About extends React.Component {
  public render() {
    const titleStyles: string = [
      'text-lg',
      'pb-6',
      'font-light',
      'pt-6',
      'text-center'
    ].join(' ');

    const pStyles: string = [
      'font-normal',
      'list-disc',
      'pb-6',
      'indent-6'
    ].join(' ');

    return (
      <div className="sm:w-1/2 ml-auto mr-auto">
        <header className="text-center">
          <h1 className="text-2xl font-mono font-semibold pb-3">Zina Olson</h1>
        </header>
        <h3 className={titleStyles}>(More content coming)</h3>
        {/* <p className={pStyles}>
        </p> */}
        <p className="space-x-4 p-12 text-center">
          {githubButton()}
          {linkedinButton()}
        </p>
      </div>
    );
  }
}
