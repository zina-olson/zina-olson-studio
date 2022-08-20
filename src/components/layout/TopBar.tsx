import { Link } from 'react-router-dom';
import { emitter, eventNames } from '../../events/EventsApi';
import { LoginEvent } from '../../events/types/UserEventTypes';
import { AppSvgTypes } from '../svg/AppSvgs';
import { AppSvg } from '../AppSvg';
import { DarkModeComponent, DarkModeComponentState } from '../helpers/DarkMode';
import { getToggleBtn } from './DarkModeToggle';
import { ReactElement } from 'react';

interface TopBarProps {}

interface TopBarState extends DarkModeComponentState {
  user?: { avatar?: string };
}

export class TopBar extends DarkModeComponent<TopBarProps, TopBarState> {
  constructor(props: TopBarProps) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(event: LoginEvent): void {
    this.setState({
      user: { avatar: event.user?.avatar }
    });
  }

  public componentDidMount(): void {
    const { userLogin, userInfo, darkMode } = eventNames;
    emitter.on([userLogin, userInfo], this.handleLogin);
    emitter.on(darkMode, this.handleDarkModeChange);
  }

  public componentWillUnmount(): void {
    const { userLogin, userInfo, darkMode } = eventNames;
    emitter.off([userLogin, userInfo], this.handleLogin);
    emitter.off(darkMode, this.handleDarkModeChange);
  }

  public render(): ReactElement {
    const darkModeType = this.state.darkModeType;
    const isDark = this.state.isDark === true;

    return (
      <nav className="flex flex-row min-w-full">
        <div className="nav-padding basis-4/5"></div>
        <div className="nav-section basis-1/5">
          <div className="flex flex-row p-4">
            <div className="flex-grow"></div>

            {/* <div className="pl-2 pr-4">
              <Link to={'/'}>
                <CustomIcon icon={AppSvgTypes.Home} />
              </Link>
            </div> */}
            {!!this.state.user?.avatar && (
              <div className="pr-2 min-w-6 w-8 h-8 ">
                <Link to={'/Login'}>
                  <img
                    id="user-avatar"
                    className="inline object-cover w-6 h-6 rounded-full"
                    src={this.state.user.avatar}
                    alt="user avatar"
                    referrerPolicy="no-referrer"
                  />
                </Link>
              </div>
            )}
            <a
              href="https://github.com/Zina-Olson/zina-olson-studio"
              target="_blank"
              rel="noopener"
              aria-label={'Github Link'}
              className="pl-2 h-8 w-8 cursor-pointer"
            >
              <AppSvg type={AppSvgTypes.GitHub} />
            </a>
            {getToggleBtn(isDark, darkModeType)}
          </div>
        </div>
      </nav>
    );
  }
}
