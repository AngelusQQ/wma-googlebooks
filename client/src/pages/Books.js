import React, { Component } from 'react';
import API from "../utils/https";

class Books extends Component {
  state = {
    books: [],
    whatever: ""
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    // API.getBooks('/api/books')
    API.saveBook()
      .then((response) => {
        console.log("first response");
        console.log(response);
      })
      .catch((err) => console.log("jenna"));
  };

  render() {
    return (
      <div>
        {this.state.whatever}
      </div>
    )
  }
}

export default Books;
