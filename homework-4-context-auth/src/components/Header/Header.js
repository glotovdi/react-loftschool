import React, { PureComponent } from 'react';
import { AuthConsumer } from '../../contexts/Auth/Auth';
import Button from '../Button/Button';
import './Header.css';
class Header extends PureComponent {
  render() {
    return (
      <AuthConsumer>
        {({ isAuthorized, email, logout }) =>
          isAuthorized ? (
            <div className="header-menu">
              <p className="header-menu__email header-email t-header-email">
                {email}
              </p>
              <Button className="header-menu__button t-logout" onClick={logout}>
                Выйти
              </Button>
            </div>
          ) : (
            ' '
          )
        }
      </AuthConsumer>
    );
  }
}

export default Header;
