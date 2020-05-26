import React from 'react';

const auth = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="form-group align-items-center">
        <label htmlFor="username">Please enter correct login to proceed.</label>
        <input
          type="text"
          className="form-control col-6"
          id="username"
          value={props.username}
          onChange={props.handleChange}
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default auth;
