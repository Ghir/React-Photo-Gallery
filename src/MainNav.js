import React from 'react';
import PropTypes from 'prop-types';
import Cats from './Cats';
import Dogs from './Dogs';
import Birds from './Birds';

const MainNav = props =>
  <nav className="main-nav">
    <ul>
      <Cats />
      <Dogs />
      <Birds />
    </ul>
  </nav>


export default MainNav;
