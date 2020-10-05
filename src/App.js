import React, { Component } from 'react'
import './App.css';
import BookList from './BookList/BookList'
import SearchBar from './SearchBar/SearchBar'

const books =[
  {
    title:"Night Train to Sugar Hill",
    author:"Iceberg Slim",
    price:"$29.99",
    snippet:"A thrilling jaunt through life in 1950's Detroit",
    thumbnail: "https://images-na.ssl-images-amazon.com/images/I/51Qhi4p1tjL._SX309_BO1,204,203,200_.jpg"
  },
  {
    title:"A Walk in the Woods",
    author:"Bill Bryson",
    price:"$8.99",
    snippet:"A tale of life, journey, and exploration along the Appalachian trail",
    thumbnail: "https://images-na.ssl-images-amazon.com/images/I/61ksRYf1yHL._SX302_BO1,204,203,200_.jpg"
  }
]

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <BookList books ={books} />
      </div>
    )
  }
}

