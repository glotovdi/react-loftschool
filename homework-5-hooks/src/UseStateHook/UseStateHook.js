import React, { Fragment, useState } from 'react';

/*
    Напишите компонент с двуми инпутами и кнопкой

    Если инпуты заполнены - при нажатии на кнопку показывается сообщение об успехе

    У сообщения об успехе должно быть поле data-testid='success'
    Сообжение должно содержать текст "Вы вошли"

    Email инпут должен иметь поле data-testid='input-email'
    Password инпут должен иметь поле data-testid='input-password'
    Кнопка логина должна иметь поле data-testid='submit'

    ##  Дополнительное задание:

    У вас получится несколько useState.
    В качестве дополнительной тренировки попробуйте использовать useReducer
    вместо нескольких useState

    Прочитайте документацию:
    https://reactjs.org/docs/hooks-reference.html#usereducer
*/

export const Form = () => {
  const click = () => {
    if (mailRef.current.value && passwordRef.current.value) setValid(true);
  };
  const [valid, setValid] = useState(false);
  const mailRef = React.createRef();
  const passwordRef = React.createRef();
  if (!valid) {
    return (
      <Fragment>
        <input data-testid="email-input" ref={mailRef} />
        <input data-testid="password-input" ref={passwordRef} />
        <button type="submit" data-testid="submit" onClick={click} />
      </Fragment>
    );
  }
  return <div data-testid="success-message">Вы вошли</div>;
};
