import React, { Component } from 'react';
import "./Result.css";

const Result = props => (
  <div>
    <div className="container-title">Currently Showing {props.searchSize} Search Results:</div>
    {props.results !== "TEMP" ?
    props.results.map(volume => {
      let foo = '';
      if(!volume.volumeInfo.imageLinks) { foo = 'https://cdn2.iconfinder.com/data/icons/smiley-emoji/512/2.png'; }
      else { foo = volume.volumeInfo.imageLinks.thumbnail; }
      return <div className="container">
        <span id="buttonOne" className="button">
          <form method="post" action="/api/books">
            <input className="none" type="text" value={volume.volumeInfo.title} name="title" />
            <input className="none" type="text" value={volume.volumeInfo.authors} name="authors" />
            <input className="none" type="text" value={volume.volumeInfo.description} name="description" />
            <input className="none" type="text" value={foo} name="thumbnail" />
            <input className="none" type="text" value={volume.volumeInfo.infoLink} name="previewLink" />
            <input type="submit" value={props.buttonOne} />
          </form>
        </span>
        <a id="buttonTwo" className="button" href={volume.volumeInfo.infoLink} target="blank">View</a>
        <h1 className="text">{volume.volumeInfo.title || "No Title Provided"}</h1>
        <h3 className="text">Author: {volume.volumeInfo.authors || "No Author Provided"}</h3>
        <div></div>
        <span>
          <div id="text"><img src={foo} alt="Book" /></div>
          <h3 id="description" className="text">Description: {volume.volumeInfo.description || "No Description Provided"}</h3>
        </span>
      </div>
    }) : <div className="empty-container"></div>}
  </div>
);

export default Result;
