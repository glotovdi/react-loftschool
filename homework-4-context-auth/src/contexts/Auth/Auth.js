import React, { PureComponent } from 'react';

const { Provider, Consumer: AuthConsumer } = React.createContext('');

class AuthProvider extends PureComponent {
  state = {
    email: '',
    authorizeError: false,
    isAuthorized: false
  };
  authorize(email, password) {
    if (email === 'stu@dent.com' && password === '123') {
      this.setState({ email, isAuthorized: true, authorizeError: '' });
      return;
    }
    this.setState({ authorizeError: 'Email или пароль введён не верно' });
  }
  logout() {
    this.setState({ isAuthorized: false });
  }
  getProviderValue() {
    return this.state;
  }
  render() {
    const { children } = this.props;
    return <Provider>{children}</Provider>;
  }
}

const TestProvider = Provider;

export { AuthProvider, AuthConsumer, TestProvider };
