import React, { PureComponent } from 'react';
import { AuthConsumer, AuthProvider } from '../../contexts/Auth';
import Congratulations from '../Congratulations';
import Footer from '../Footer';
import Header from '../Header';
import Layout from '../Layout';
import LoginForm from '../LoginForm';

class App extends PureComponent {
  render() {
    return (
      <AuthProvider>
        <Layout header={Header} footer={Footer}>
          <AuthConsumer>
            {({ isAuthorized, authorize, authorizeError }) =>
              isAuthorized ? (
                <Congratulations />
              ) : (
                <LoginForm
                  authorize={authorize}
                  authorizeError={authorizeError}
                />
              )
            }
          </AuthConsumer>
        </Layout>
      </AuthProvider>
    );
  }
}

export default App;
