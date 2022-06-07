import React, { ReactElement } from 'react';

export interface ExternalLinkProps {
  dest: string;
  content: ReactElement;
  className?: string;
}

export class ExternalLink extends React.Component<ExternalLinkProps> {
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
