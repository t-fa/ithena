import React from 'react';
import { Link } from 'react-router-dom';

const navbar = (props) => {
  let logOutClass = `nav-item hidden`;
  if (props.auth) {
    logOutClass = `nav-item active`;
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary rounded-sm mt-3">
      <ul className="navbar-nav mx-auto">
        <Link className="navbar-brand" to="/">
          Ithena
        </Link>
        <li className="nav-item active">
          <Link className="nav-link" to="/">
            Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Map View
          </Link>
        </li>
        <li className="nav-item active">
          <Link className="nav-link" to="/control">
            Control
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Calculate
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Reports
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Admin
          </Link>
        </li>
        <li className={logOutClass}>
          <Link className="nav-link" to="/" onClick={props.logOut}>
            Log Out
          </Link>
          {/* <button onClick={props.logOut}>Logout</button> */}
        </li>
      </ul>
    </nav>
  );
};

export default navbar;
