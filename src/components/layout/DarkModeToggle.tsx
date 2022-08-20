import { DarkModeTypes } from '../../events/types/DarkModeEventTypes';
import { AppSvgTypes } from '../svg/AppSvgs';
import { toggleDarkMode } from '../../utilities/DarkMode';
import { Theme } from '../../utilities/Theme';
import { AppSvg } from '../AppSvg';
import { ReactElement } from 'react';

export const getToggleBtn = (
  isDark: boolean,
  modeType: DarkModeTypes
): ReactElement => {
  const handleMode = (mode: DarkModeTypes): void => {
    toggleDarkMode(mode);
  };

  switch (modeType) {
    case DarkModeTypes.ON:
      return (
        <button onClick={(): void => handleMode(DarkModeTypes.OFF)}>
          <AppSvg
            className="pl-4 h-8 w-10 -mt-2 cursor-pointer"
            type={AppSvgTypes.Moon}
            color={Theme.colors.accent}
          />
        </button>
      );
    case DarkModeTypes.OFF:
      return (
        <button onClick={(): void => handleMode(DarkModeTypes.SYSTEM)}>
          <AppSvg
            className="pl-4 h-8 w-10 -mt-2 cursor-pointer"
            type={AppSvgTypes.Sun}
            color={isDark ? 'accent' : 'currentColor'}
          />
        </button>
      );
    case DarkModeTypes.SYSTEM:
      if (isDark) {
        return (
          <button onClick={(): void => handleMode(DarkModeTypes.ON)}>
            <AppSvg
              className="pl-4 h-8 w-10 -mt-2 cursor-pointer"
              type={AppSvgTypes.Moon}
              color={'grey'}
            />
          </button>
        );
      }
      return (
        <button onClick={(): void => handleMode(DarkModeTypes.ON)}>
          <AppSvg
            className="pl-4 h-8 w-10 -mt-2 cursor-pointer"
            type={AppSvgTypes.Sun}
            color={'grey'}
          />
        </button>
      );
    default:
      console.error('Unsupported dark mode type type ', modeType);
      return <></>;
  }
};
