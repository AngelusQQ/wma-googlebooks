import React, { Component } from 'react';
import API from "../utils/https";

class Books extends Component {
  state = {
    books: [],
    search: ""
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks('/api/books')
      .then(response => console.log(response))
      .catch((err) => console.log(err));
  };

  saveBooks = () => {
    API.saveBook()
      .then(response => console.log(response))
      .catch((err) => console.log(err));
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  submitSearch = event => {
    API.searchBooks(this.state.search)
      .then(response => console.log(typeof response))
      .catch((err) => console.log(err))
  };

  render() {
    return (
      <div>
        <form>
          <input value={this.state.search} onChange={this.handleInputChange} name="search">
          <button disabled={!(this.state.search)} onClick={this.submitSearch}></button>
        </form>

      </div>
    )
  }
}

export default Books;
