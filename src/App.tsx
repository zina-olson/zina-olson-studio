import { Outlet } from 'react-router-dom';
import { DarkModeComponent } from './components/helpers/DarkMode';
import { TopBar } from './components/layout/TopBar';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { ReactElement } from 'react';
import { StudioApiService } from './services/StudioApiService';
import { UserInfoEvent } from './events/types/UserEventTypes';
import { emitter, eventNames } from './events/EventsApi';
import { getToken, removeToken } from './utilities/AuthUtil';

export default class App extends DarkModeComponent {
  private service: StudioApiService = new StudioApiService();

  async componentDidMount(): Promise<void> {
    // handle super class behaviour since we override the mount method
    emitter.on('darkMode', this.handleDarkModeChange);

    // check for token and fetch userInfo if found
    const token = getToken();
    console.log('token found: ' + token);
    if (token) {
      try {
        const user = await this.service.getUserInfo(token);
        const ev: UserInfoEvent = { user };
        emitter.emit(eventNames.userInfo, ev);
      } catch (err) {
        console.error('Error fetching user: ', err);
        removeToken();
        throw err;
      }
    }
  }
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
