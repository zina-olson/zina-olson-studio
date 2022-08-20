import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';

export class Nav extends React.Component {
  public render(): ReactElement {
    const myArray = [
      ['Home', '/'],
      // ['Projects', '/projects'],
      ['Resume', '/resume'],
      ['Contact', '/contact']
    ];
    return (
      <nav className="sm:justify-center sm:flex space-x-4 text-center sm:text-left">
        {myArray.map(([title, url]) => (
          <Link key={title} to={url}>
            {title}
          </Link>
        ))}
      </nav>
    );
  }
}
