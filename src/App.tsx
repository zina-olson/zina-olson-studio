import { Outlet } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { DarkModeComponent } from './components/helpers/DarkMode';
import { TopBar } from './components/layout/TopBar';

export default class App extends DarkModeComponent {
  render() {
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
};
