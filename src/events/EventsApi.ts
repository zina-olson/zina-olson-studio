import Emittery from 'emittery';
import { DarkModeChangeEvent } from './types/DarkModeEventTypes';
import { LoginEvent, UserInfoEvent } from './types/UserEventTypes';
import { ShouldNavigateEvent } from './types/UtilityEventTypes';

/*
 *  The application event names
 */
export const eventNames = {
  darkMode: 'darkMode',
  shouldNavigate: 'shouldNavigate',
  userLogin: 'userLogin',
  userInfo: 'userInfo'
  // <-- name your new event here
} as const;

/*
 *  The application event types (handler parameters)
 */
interface Events {
  [eventNames.darkMode]: DarkModeChangeEvent;
  [eventNames.shouldNavigate]: ShouldNavigateEvent;
  [eventNames.userLogin]: LoginEvent;
  [eventNames.userInfo]: UserInfoEvent;
  // <-- register an eventName with an event type here
}

// helper type
export type EventName = keyof Events;

/*
 *  The application event emitter
 */
export const emitter = new Emittery<Events>();

/*
 *  App Event API Invocation and Utility Helpers Defined Below
 */

export const signalDarkModeChange = (change: DarkModeChangeEvent): void => {
  emitter.emit(eventNames.darkMode, change);
};

// <-- define an event trigger function here
