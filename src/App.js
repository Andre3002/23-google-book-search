import React, { Component } from 'react'
import './App.css';
import BookList from './BookList/BookList'
import SearchBar from './SearchBar/SearchBar'

// const books = [
//   {
//     title: "Night Train to Sugar Hill",
//     author: "Iceberg Slim",
//     price: "$29.99",
//     snippet: "A thrilling jaunt through life in 1950's Detroit",
//     thumbnail: "https://images-na.ssl-images-amazon.com/images/I/51Qhi4p1tjL._SX309_BO1,204,203,200_.jpg"
//   },
//   {
//     title: "A Walk in the Woods",
//     author: "Bill Bryson",
//     price: "$8.99",
//     snippet: "A tale of life, journey, and exploration along the Appalachian trail",
//     thumbnail: "https://images-na.ssl-images-amazon.com/images/I/61ksRYf1yHL._SX302_BO1,204,203,200_.jpg"
//   }
// ]

export default class App extends Component {
  state = {
    books: []
  }

  handleSubmit=(e)=> {
    e.preventDefault()
    const searchTerm = e.target.searchTerm.value
    const printType = e.target.printType.value
    const bookType = e.target.bookType.value
    const url = "https://www.googleapis.com/books/v1/volumes"
    const params = {
      key: "AIzaSyByTnTvg1woG78Azn1NKIbcLaleyJj8t8Y",
      q: searchTerm
    }

    if (printType) {
      params.printType = printType
    }

    if (bookType) {
      params.filter = bookType
    }

    const querystring = Object.keys(params).map(k => `${k}=${params[k]}`).join("&")

    fetch(url + "?" + querystring)
      .then(res => {
        if (!res.ok) {
          throw new Error('Something went wrong, please try again')
        }
        return res
      })
      .then(res => res.json())
      .then(data => {
        this.setState({
          books: data.items
        })
      })
      .catch(err => {
        this.setState({
          error: err.message
        })
      })
  }

  render() {
    return (
      <div className="App">
        <SearchBar
          handleSubmit={this.handleSubmit}
        />
        <BookList books={this.state.books} />
      </div>
    )
  }
}

