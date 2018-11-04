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
      .then(res => console.log("Bad Wolf"))
      .catch(err => console.log(err));
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
