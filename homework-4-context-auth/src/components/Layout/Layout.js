import React, { PureComponent } from 'react';
import './Layout.css';

class Layout extends PureComponent {
  render() {
    const { header, footer } = this.props;

    if (!header && !footer) {
      return (
        <div>
          <main />
        </div>
      );
    }
    if (header) {
      return (
        <div>
          <header className="header" />
          <main className="main--with-header" />
        </div>
      );
    }
    if (footer) {
      return (
        <div>
          <footer className="footer" />
          <main className="main--with-footer" />
        </div>
      );
    }
  }
}

export default Layout;
