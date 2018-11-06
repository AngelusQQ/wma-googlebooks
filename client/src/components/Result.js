import React, { Component } from 'react';
import "./Result.css";

const Result = props => (
  <div>
  <div className="container-title">Currently Showing {props.searchSize} Search Results:</div>
  {props.results !== "TEMP" ?
  props.results.map(volume => (
    <div className="container">
      <span id="buttonOne" className="button"><button><a href={volume.volumeInfo.previewLink} target="blank"></a>{props.buttonOne}</button></span>
      <span id="buttonTwo" className="button"><button>{props.buttonTwo}</button></span>
      <h1 className="text">{volume.volumeInfo.title || "No Title Provided"}</h1>
      <h3 className="text">Author: {volume.volumeInfo.authors || "No Author Provided"}</h3>
      <div></div>
      <span><img src={volume.volumeInfo.imageLinks.thumbnail} alt="Book" />
      <h3 className="text">Description: {volume.volumeInfo.description || "No Description Provided"}</h3></span>

    </div>
  )) : <div className="empty-container"></div>}
  </div>
);

export default Result;
