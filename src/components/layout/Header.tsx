import { ReactElement } from 'react';
import { AppSvgTypes } from '../svg/AppSvgs';
import { AppSvg } from '../AppSvg';
import { Nav } from './Nav';

export function Header(): ReactElement {
  return (
    <div className="header-container">
      <div className="flex justify-center">
        <AppSvg type={AppSvgTypes.Logo} width="8rem" />
      </div>
      <div className="font-normal">
        <Nav />
      </div>
    </div>
  );
}
