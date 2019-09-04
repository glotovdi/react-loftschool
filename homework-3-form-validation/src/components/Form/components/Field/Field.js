import React from 'react';

const Field = props => (
  <p className="field">
    <label className="field__label" htmlFor={props.name}>
      <span className="field-label">{props.title}</span>
    </label>
    <input
      className={`field__input field-input t-input-${props.name}`}
      type={props.type}
      name={props.name}
      value={props.value}
      onChange={props.changeFn}
    />
    <span className={`field__error field-error t-error-${props.name}`}>
      {props.error}
    </span>
  </p>
);

export default Field;
