import React, { ReactElement } from 'react';
import logo from './logos/logo.svg';
import { Nav } from './components/Nav';
import { Outlet } from 'react-router-dom';

function header(): ReactElement {
  return (
    <React.Fragment>
      <div className="flex justify-center">
        <img src={logo} className="h-32 w-32" alt="logo" />
      </div>
      <div className="font-normal">
        <Nav />
      </div>
    </React.Fragment>
  );
}

function content(): ReactElement {
  return (
    <div className="p-20">
      <Outlet />
    </div>
  );
}

function footer(): ReactElement {
  return (
    <footer className="w-full h-32 p-12 text-center text-xs font-semibold">
      © 2022{' '}
      <a href="https://olson.studio" rel="noopener" target="_blank">
        Olson Studio
      </a>
      . All Rights Reserved.
    </footer>
  );
}

function App(): ReactElement {
  return (
    <div className="my-awesome-app w-full">
      <div className="header-container">{header()}</div>
      <div className="content-container">{content()}</div>
      <div className="footer-container">{footer()}</div>
    </div>
  );
}

export default App;
