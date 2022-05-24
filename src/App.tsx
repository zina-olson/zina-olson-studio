import { ReactElement } from 'react';
import logo from './logos/logo.svg';
import { Nav } from './components/Nav';
import { Outlet } from 'react-router-dom';

function App(): ReactElement {
  return (
    <div className="my-awesome-app w-full h-full">
      <div className="flex justify-center">
        <img src={logo} className="h-32 w-32" alt="logo" />
      </div>
      <div className="font-semibold">
        <Nav />
      </div>
      <div className="p-20">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
