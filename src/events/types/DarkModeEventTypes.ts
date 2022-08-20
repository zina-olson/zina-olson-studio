export enum DarkModeTypes {
  ON = 'on',
  OFF = 'off',
  SYSTEM = 'system'
}

export interface DarkModeChangeEvent {
  isDarkMode: boolean;
  darkModeType: DarkModeTypes;
}
