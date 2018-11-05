import React, { Component } from 'react';
import Result from '../components/Result';
import API from "../utils/https";

class Books extends Component {
  state = {
    books: "TEMP",
    search: ""
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks('/api/books')
      .then(response => {
        console.log(typeof response);
        console.log(response);
      })
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
    event.preventDefault();

    console.log(this.state.search);
    API.searchBooks(this.state.search)
      .then(response => {
        this.setState({books: response.items});
        console.log(response.items);
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <form>
          <input value={this.state.search} onChange={this.handleInputChange} name="search"></input>
          <button disabled={!(this.state.search)} onClick={this.submitSearch}></button>
        </form>
        <Result results={this.state.books}/>
      </div>
    )
  }
}

export default Books;
