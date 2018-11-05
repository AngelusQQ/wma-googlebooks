import React, { Component } from 'react';

const Result = props => (
  <div>
  {props.results !== "TEMP" ?
  props.results.map(volume => (
    <div>
      <h1>{volume.volumeInfo.title}</h1>
      <h3>{volume.volumeInfo.authors}</h3>
      <h3>{volume.volumeInfo.description}</h3>
    </div>
  )) : <div>Hello World</div>}
  </div>
);

export default Result;
