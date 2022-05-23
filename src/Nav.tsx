import React from 'react';
import { Link } from 'react-router-dom';

export class Nav extends React.Component {
  public render() {
    const myArray = [
      ['Home', '/'],
      ['Projects', '/projects'],
      ['Resume', '/resume'],
      ['Contact Me', '/contact']
    ];
    return (
      <nav className="flex sm:justify-center space-x-4">
        {myArray.map(([title, url]) => (
          <Link to={url}>{title}</Link>
        ))}
      </nav>
    );
  }
}
