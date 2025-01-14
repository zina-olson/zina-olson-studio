import { ReactElement } from 'react';
import { DarkModeComponent } from '../helpers/DarkMode';

interface ContentPaneProps {
  className?: string;
}

export class ContentPane extends DarkModeComponent<ContentPaneProps> {
  public render(): ReactElement {
    const classes = 'sm:w-1/2 ml-auto mr-auto ' + this.props.className || '';
    return <div className={classes}>{this.props.children}</div>;
  }
}
