import React, { Component } from 'react';
import './Title.css';

const Title = props => (
  <img id="image" src={props.src} alt="title" height={props.height} width={props.width} />
);

export default Title;
