import { Outlet } from 'react-router-dom';
import { DarkModeComponent } from './components/helpers/DarkMode';
import { TopBar } from './components/layout/TopBar';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { ReactElement } from 'react';

export default class App extends DarkModeComponent {
  render(): ReactElement {
    return (
      <div className="my-awesome-app w-full">
        <div className="md:w-90 max-w-90 h-56px">
          <TopBar />
        </div>
        <Header />
        <div className="content-container p-20">
          <Outlet />
        </div>
        <Footer />
      </div>
    );
  }
}
