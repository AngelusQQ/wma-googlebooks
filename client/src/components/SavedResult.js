import React, { Component } from 'react';
import "./SavedResult.css";

const SavedResult = props => (
  <div>
    <div className="container-title">Currently Showing {props.searchSize} Search Results:</div>
    {props.results !== "TEMP" ?
    props.results.map(volume => (
      <div className="container">
        <span id="buttonOne" className="button">
          <form method="post" action="/api/books/delete">
            <input className="none" type="text" value={volume._id} name="_id" />
            <input type="submit" value={props.buttonOne} />
          </form>
        </span>
        <h1 className="text">{volume.title || "No Title Provided"}</h1>
        <h3 className="text">Author: {volume.authors || "No Author Provided"}</h3>
        <div></div>
        <span>
          <div id="text"><img src={volume.thumbnail} alt="Book" /></div>
          <h3 id="description" className="text">Description: {volume.description || "No Description Provided"}</h3>
        </span>
      </div>
    )) : <div className="empty-container"></div>}
  </div>
);

export default SavedResult;

//
