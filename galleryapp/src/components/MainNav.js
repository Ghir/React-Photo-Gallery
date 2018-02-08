import React from 'react';
import { Link } from 'react-router-dom';

export default props =>
  <nav className="main-nav">
    <ul>
      <li><Link to="/">Search</Link></li>
      <li><Link to='/Art'>Art</Link></li>
      <li><Link to='/City'>City</Link></li>
      <li><Link to='/Birds'>Birds</Link></li>
    </ul>
  </nav>
