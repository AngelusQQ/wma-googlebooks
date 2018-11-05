import React, { Component } from 'react';
import "./Result.css";

const Result = props => (
  <div>
  {props.results !== "TEMP" ?
  props.results.map(volume => (
    <div className="container">
      <h1>{volume.volumeInfo.title}</h1>
      <h3>{volume.volumeInfo.authors}</h3>
      <h3>{volume.volumeInfo.description}</h3>
    </div>
  )) : <div className="empty-container"></div>}
  </div>
);

export default Result;
