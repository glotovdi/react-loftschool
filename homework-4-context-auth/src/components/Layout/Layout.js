import React, { PureComponent } from 'react';
import SectionTitle from '../SectionTitle';
import './Layout.css';

class Layout extends PureComponent {
  render() {
    const { header, footer, children } = this.props;
    return (
      <React.Fragment>
        {header ? this.renderHeader(header) : null}

        <main
          className={`main ${header ? 'main--with-header' : ''} ${
            footer ? 'main--with-footer' : ''
          }`}
        >
          <SectionTitle className="main__title">Main</SectionTitle>
          {children}
        </main>

        {footer ? this.renderFooter(footer) : null}
      </React.Fragment>
    );
  }

  renderHeader = Header => (
    <header className="header">
      <SectionTitle className="header__title">Header</SectionTitle>
      <div className="header__content">
        <Header />
      </div>
    </header>
  );

  renderFooter = Footer => (
    <footer className="footer">
      <SectionTitle className="header__title">Footer</SectionTitle>
      <Footer />
    </footer>
  );
}

export default Layout;
