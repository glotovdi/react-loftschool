import React from 'react';
/*
  Напишите HOC который будет помимо компонента
  также принимать параметры которые он передаст
  в качестве пропов обёрнутому компоненту
*/

export const withGivenProps = params => Component => {
  return class extends React.Component {
    render() {
      return <Component {...params} />;
    }
  };
};
