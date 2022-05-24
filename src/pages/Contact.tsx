import React from 'react';
import { githubButton } from '../social/githubButton';
import { linkedinButton } from '../social/linkedinButton';

export class Contact extends React.Component {
  public render() {
    return (
      <div className="text-center font-semibold">
        <p className="text-4xl">Contact Information</p>
        <table className="mx-auto mb-11 mt-6 p-6 table-auto">
          <tbody>
            <tr>
              <td>Email: rvazina@gmail.com </td>
            </tr>
            <tr>
              <td className="space-x-4 p-6">
                {githubButton()} {linkedinButton()}{' '}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
