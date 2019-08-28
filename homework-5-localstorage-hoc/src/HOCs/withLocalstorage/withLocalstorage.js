import React, { Component } from 'react';
import { load, save } from '../../localstorage';

const withLocalstorage = (key, value) => WrappedComponent => {
  return class Wrapper extends Component {
    saveData = data => {
      save(key, data);
      this.forceUpdate();
    };

    loadData() {
      return load(key) || value;
    }

    render() {
      const { ...props } = this.props;

      return (
        <WrappedComponent
          {...props}
          savedData={this.loadData()}
          saveData={this.saveData}
        />
      );
    }
  };
};
export default withLocalstorage;
