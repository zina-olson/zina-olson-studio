import React from 'react';
import { githubButton } from './social/githubButton';

export class Contact extends React.Component {
  public render() {
    return (
      <header className="text-center">
        <p className="text-4xl">Contact Information</p>
        <table className="mx-auto mb-11 mt-6">
          <tr>
            <td>Email</td>
            <td>rvazina@gmail.com</td>
          </tr>
        </table>
        <p className="text-4xl">Social Links</p>
        {githubButton()}
      </header>
    );
  }
}
