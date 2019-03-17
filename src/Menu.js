import React from 'react';
import { Link } from 'react-router-dom';

const createStyles = (show) => ({
  display: show ? 'block' : 'none'
});

export default ({ isAuthorized }) => (
  <ul>
    <li style={createStyles(isAuthorized)}>
      <Link to="/beer-list">Beer list</Link>
    </li>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li style={createStyles(!isAuthorized)}>
      <Link to="/login">Login</Link>
    </li>
    <li style={createStyles(!isAuthorized)}>
      <Link to="/register">Register</Link>
    </li>    
    <li style={createStyles(isAuthorized)}>
      <Link to="/upload">Upload</Link>
    </li>

    <li style={createStyles(isAuthorized)}>
      <Link to="/logout">Logout</Link>
    </li>
  </ul>
);