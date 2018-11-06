import React, { Component } from 'react';
import './Books.css';
import NavBar from '../components/NavBar';
import Title from '../components/Title';
import Result from '../components/Result';
import titleImage from '../images/title.png';
import API from '../utils/https';

class SavedBooks extends Component {
  state = {
    books: "TEMP",
    searchSize: 0
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks('/api/books')
      .then(response => console.log(response.title))
      .catch((err) => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <Title src={titleImage} />
        <Result onChange={this.handleInputChange} searchSize={this.state.searchSize}
        results={this.state.books} name="searchSize"
        buttonOne="Delete Book" buttonTwo="View Book" />
      </div>
    )
  }
}

export default SavedBooks;
