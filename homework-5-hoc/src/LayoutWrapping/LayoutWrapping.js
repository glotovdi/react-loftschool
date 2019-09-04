import React from 'react';
/*
  Напишите HOC, который обернёт компонент в `div`,
  со стилем 'position: absolute'
*/

export const wrapWithAbsolutePosition = Component => {
  return class extends React.Component {
    render() {
      return (
        <div style={{ position: 'absolute' }}>
          <Component />
        </div>
      );
    }
  };
};
