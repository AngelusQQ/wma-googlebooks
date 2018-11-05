import React, { Component } from 'react';
import "./Result.css";

const Result = props => (
  <div>
  <div className="container-title">Currently Showing {props.searchSize} Search Results:</div>
  {props.results !== "TEMP" ?
  props.results.map(volume => (
    <div className="container">
      <h1>{volume.volumeInfo.title}</h1>
      <h3>Author: {volume.volumeInfo.authors}</h3>
      <h3>Description: {volume.volumeInfo.description}</h3>
    </div>
  )) : <div className="empty-container"></div>}
  </div>
);

export default Result;
