import React, { Component } from 'react';
import "./Result.css";

const Result = props => (
  <div>
    <div className="container-title">Currently Showing {props.searchSize} Search Results:</div>
    {props.results !== "TEMP" ?
    props.results.map(volume => (
      <div className="container">
        <span id="buttonOne" className="button">
          <form method="post" action={props.request}>
            <input className="none" type="text" value={volume.volumeInfo.title || volume.title} name="title" />
            <input className="none" type="text" value={volume.volumeInfo.authors || volume.authors} name="authors" />
            <input className="none" type="text" value={volume.volumeInfo.description || volume.description} name="description" />
            <input type="submit" value={props.buttonOne} />
          </form>
        </span>
        <span id="buttonTwo" className="button">
          <form action={volume.volumeInfo.previewLink || volume.previewLink || "No Preview Link"} target="blank">
            <input type="submit" value={props.buttonTwo} />
          </form>
        </span>
        <h1 className="text">{volume.volumeInfo.title || "No Title Provided"}</h1>
        <h3 className="text">Author: {volume.volumeInfo.authors || "No Author Provided"}</h3>
        <div></div>
        <span>
          <div id="text"><img src={volume.volumeInfo.imageLinks.thumbnail} alt="Book" /></div>
          <h3 id="description" className="text">Description: {volume.volumeInfo.description || "No Description Provided"}</h3>
        </span>
      </div>
    )) : <div className="empty-container"></div>}
  </div>
);

export default Result;
