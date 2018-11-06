import React, { Component } from 'react';
import './Books.css';
import NavBar from '../components/NavBar';
import Title from '../components/Title';
import Result from '../components/Result';
import titleImage from '../images/title.png';
import API from '../utils/https';

class Books extends Component {
  state = {
    books: "TEMP",
    search: "",
    searchSize: 0
  };

  componentDidMount() {
    // this.loadBooks();
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
        this.setState({
          books: response.items,
          search: "",
          searchSize: response.items.length
        });
        console.log(response.items);
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <Title src={titleImage} />
        <form>
          <input id="searchbar" value={this.state.search} onChange={this.handleInputChange} name="search"></input>
          <button id="submitButton" disabled={!(this.state.search)} onClick={this.submitSearch}>Search</button>
        </form>
        <Result onChange={this.handleInputChange} searchSize={this.state.searchSize}
        results={this.state.books} name="searchSize"
        buttonOne="Add to Saved Books" buttonTwo="View"/>
      </div>
    )
  }
}

export default Books;
