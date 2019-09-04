import React from 'react';
import Bond from './assets/bond_approve.jpg';
import Field from './components/Field/Field';
import './Form.css';

export default class Form extends React.Component {
  state = {
    firstName: { value: '', error: '' },
    lastName: { value: '', error: '' },
    password: { value: '', error: '' },
    isValidForm: false
  };

  setStateForField = name => event => {
    this.setState({
      [name]: { error: '', value: event.target.value }
    });
    this.resetErrors();
  };

  resetErrors() {
    this.setState(prevState => ({
      firstName: { value: prevState.firstName.value, error: '' },
      lastName: { value: prevState.lastName.value, error: '' },
      password: { value: prevState.password.value, error: '' }
    }));
  }

  handleSubmit = event => {
    event.preventDefault();
    this.checkFormIsCorrect();
    if (this.state.firstName.value === '') {
      this.setError('firstName', 'Нужно указать имя');
    } else {
      if (this.state.firstName.value.toLocaleLowerCase() !== 'james')
        this.setError('firstName', 'Имя указано не верно');
    }
    if (this.state.lastName.value === '') {
      this.setError('lastName', 'Нужно указать фамилию');
    } else {
      if (this.state.lastName.value.toLocaleLowerCase() !== 'bond')
        this.setError('lastName', 'Фамилия указана не верно');
    }
    if (this.state.password.value === '') {
      this.setError('password', 'Нужно указать пароль');
    } else {
      if (this.state.password.value !== '007')
        this.setError('password', 'Пароль указан не верно');
    }
  };

  setError(field, error) {
    this.setState(prevState => ({
      [field]: { value: prevState[field].value, error: error }
    }));
  }

  checkFormIsCorrect() {
    if (
      this.state.firstName.value.toLocaleLowerCase() === 'james' &&
      this.state.lastName.value.toLocaleLowerCase() === 'bond' &&
      this.state.password.value === '007'
    ) {
      this.setState({ isValidForm: true });
    }
  }

  render() {
    if (this.state.isValidForm) {
      return <img alt="bond approve" src={Bond} className="t-bond-image" />;
    }

    return (
      <div className="app-container">
        <form className="form" onSubmit={this.handleSubmit}>
          <h1>Введите свои данные, агент</h1>
          <Field
            title="Имя"
            value={this.state.firstName.value}
            changeFn={this.setStateForField('firstName')}
            error={this.state.firstName.error}
            name="firstname"
            type="text"
          />

          <Field
            title="Фамилия"
            value={this.state.lastName.value}
            changeFn={this.setStateForField('lastName')}
            error={this.state.lastName.error}
            name="lastname"
            type="text"
          />

          <Field
            title="Пароль"
            value={this.state.password.value}
            changeFn={this.setStateForField('password')}
            error={this.state.password.error}
            name="password"
            type="password"
          />

          <div className="form__buttons">
            <input
              type="submit"
              className="button t-submit"
              value="Проверить"
            />
          </div>
        </form>
      </div>
    );
  }
}
