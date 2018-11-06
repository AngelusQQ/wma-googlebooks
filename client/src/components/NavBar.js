import React, { Component } from 'react';
import './NavBar.css';

const NavBar = props => (
  <div id="NavBar">
    <span id="span"><a href="https://books.google.com" target="blank">Google Books</a></span>
    <span className="span"><a href="/">Home</a></span>
    <span className="span"><a href="/saved">Saved Books</a></span>
  </div>
);

export default NavBar;
