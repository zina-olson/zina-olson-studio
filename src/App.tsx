import { ReactElement } from 'react';
import logo from './logos/logo.svg';
import { githubButton } from './social/githubButton';
import { Nav } from './Nav';
import { Outlet } from 'react-router-dom';

function App(): ReactElement {
  return (
    <div className="my-awesome-app w-full h-full">
      <div className="flex justify-center">
        <img src={logo} className="h-32 w-32" alt="logo" />
      </div>
      <div className="">
        <Nav />
      </div>
      <div className="border border-gray-50 rounded-xl p-20 shadow-xl">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
