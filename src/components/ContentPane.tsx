import React from 'react';

interface ContentPaneProps {
  className?: string;
}

export class ContentPane extends React.Component<ContentPaneProps> {
  public render() {
    const classes = 'sm:w-1/2 ml-auto mr-auto ' + this.props.className || '';
    return <div className={classes}>{this.props.children}</div>;
  }
}
