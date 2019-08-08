import React, { PureComponent } from 'react';
import { AuthConsumer } from '../../contexts/Auth/Auth';
import './Header.css';

class Header extends PureComponent {
  render() {
    return (
      <AuthConsumer>
        {({ isAuthorized, authorize, authorizeError }) => 'sadasd'}
      </AuthConsumer>
    );
  }
}

export default Header;
