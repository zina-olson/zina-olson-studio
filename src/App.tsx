import React, { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

function App(): ReactElement {
  return (
    <div className="my-awesome-app w-full">
      <Header />
      <div className="content-container p-20">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
