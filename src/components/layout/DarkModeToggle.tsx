
import { DarkModeTypes } from '../../events/types/DarkModeEventTypes';
import { AppSvgTypes } from '../../svg/AppSvgs';
import { toggleDarkMode } from '../../utilities/DarkMode';
import { Theme } from '../../utilities/Theme';
import { AppSvg } from '../AppSvg';

export const getToggleBtn = (isDark: boolean, modeType: DarkModeTypes) => {
  const handleMode = (mode: DarkModeTypes) => {
    toggleDarkMode(mode);
  };

  switch (modeType) {
    case DarkModeTypes.ON:
      return (
        <button onClick={() => handleMode(DarkModeTypes.OFF)}>
          <AppSvg
            className="pl-4 h-8 w-10 -mt-2 cursor-pointer"
            type={AppSvgTypes.Moon}
            color={Theme.colors.accent}
          />
        </button>
      );
    case DarkModeTypes.OFF:
      return (
        <button onClick={() => handleMode(DarkModeTypes.SYSTEM)}>
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
          <button onClick={() => handleMode(DarkModeTypes.ON)}>
            <AppSvg
              className="pl-4 h-8 w-10 -mt-2 cursor-pointer"
              type={AppSvgTypes.Moon}
              color={'grey'}
            />
          </button>
        );
      }
      return (
        <button onClick={() => handleMode(DarkModeTypes.ON)}>
          <AppSvg
            className="pl-4 h-8 w-10 -mt-2 cursor-pointer"
            type={AppSvgTypes.Sun}
            color={'grey'}
          />
        </button>
      );
    default:
      console.error('Unsupported dark mode type type ', modeType);
  }
};
