import React from 'react';

const select = (props) => {
  return (
    <label>
      {props.label}
      <select className="col mx-2">
        <option value={props.text}>{props.text}</option>
      </select>
    </label>
  );
};

export default select;
