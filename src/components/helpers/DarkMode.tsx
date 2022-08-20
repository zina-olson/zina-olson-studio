import React from 'react';
import { emitter } from '../../events/EventsApi';
import { DarkModeChangeEvent, DarkModeTypes } from '../../events/types/DarkModeEventTypes';
import { getDarkModeType, isDarkMode } from '../../utilities/DarkMode';

export interface DarkModeComponentProps {}
export interface DarkModeComponentState {
  isDark: boolean;
  darkModeType: DarkModeTypes;
}

export class DarkModeComponent<
  T extends DarkModeComponentProps = DarkModeComponentProps,
  V extends DarkModeComponentState = DarkModeComponentState
> extends React.Component<T, V> {
  constructor(props: DarkModeComponentProps) {
    super(props as T);
    this.handleDarkModeChange = this.handleDarkModeChange.bind(this);
    this.state = {
      darkModeType: getDarkModeType(),
      isDark: isDarkMode()
    } as V;
  }

  public componentDidMount() {
    emitter.on('darkMode', this.handleDarkModeChange);
  }

  public componentWillUnmount() {
    emitter.off('darkMode', this.handleDarkModeChange);
  }

  protected handleDarkModeChange(changed: DarkModeChangeEvent) {
    this.setState({
      darkModeType: changed.darkModeType,
      isDark: changed.isDarkMode
    });
  }

  public getDarkModeState() {
    const { darkModeType, isDark } = this.state;
    return { darkModeType, isDark };
  }
}
