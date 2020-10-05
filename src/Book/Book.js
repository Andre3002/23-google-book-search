import React from 'react'
import './Book.css'

export default function Book(props) {
    return (
        <div className="book">
            <ul>
                {props.book.map(book => (
                    <li>
                        <h2>{book.title}</h2>
                        <p>Author: {book.author}</p>
                        <p>Price: {book.price}</p>
                        <p>{book.snippet}</p>
                        <img src={book.thumbnail} />
                    </li>
                ))
                }
            </ul>
        </div>
    )
}
