import React from 'react'
import Book from '../Book/Book'

export default function BookList(props) {
    return (
        <div className="BookList">
            <Book book={props.books} />
        </div>
    )
}
