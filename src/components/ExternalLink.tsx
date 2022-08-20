import { ReactElement } from 'react';
import { DarkModeComponent } from './helpers/DarkMode';

export interface ExternalLinkProps {
  dest: string;
  content: ReactElement;
  className?: string;
}

export class ExternalLink extends DarkModeComponent<ExternalLinkProps> {
  public render() {
    return (
      <a
        className={this.props.className}
        href={this.props.dest}
        rel="noopener"
        target={'_blank'}
      >
        <button>{this.props.content}</button>
      </a>
    );
  }
}
