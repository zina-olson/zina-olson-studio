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
      <nav className="sm:justify-center sm:flex space-x-4 text-center sm:text-left">
        {myArray.map(([title, url]) => (
          <Link to={url}>{title}</Link>
        ))}
      </nav>
    );
  }
}
