import React, { PureComponent } from 'react';

const { Provider, Consumer: AuthConsumer } = React.createContext('');

class AuthProvider extends PureComponent {
  constructor() {
    super();
    this.state = {
      email: '',
      authorizeError: '',
      isAuthorized: false
    };
    this.authorize = this.authorize.bind(this);
    this.logout = this.logout.bind(this);
  }

  authorize(email, password) {
    if (email === 'stu@dent.com' && password === '123') {
      this.setState({ email, isAuthorized: true, authorizeError: '' });
      return;
    }
    this.setState({ authorizeError: 'Email или пароль введён не верно' });
  }

  logout() {
    this.setState({ isAuthorized: false, email: '' });
  }

  getProviderValue() {
    return {
      ...this.state,
      authorize: this.authorize,
      logout: this.logout
    };
  }
  render() {
    const { children } = this.props;
    return <Provider value={this.getProviderValue()}>{children}</Provider>;
  }
}

const TestProvider = Provider;

export { AuthProvider, AuthConsumer, TestProvider };
