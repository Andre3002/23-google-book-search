import React from 'react'
import './Book.css'

export default function Book(props) {
    return (
        <div className="book">
            {console.log(props)}
            <ul>
                {props.book.map(book => (
                    <li key={book.etag}> {/*Used google defined etag as unique id for li */}
                        <h2>{book.volumeInfo.title}</h2>
                        <p>Author: {book.volumeInfo.authors}</p>
                        {/* Need to fix line below - Only works with filter for paid books */}
                        {/* <p>Retail Price: {book.saleInfo.retailPrice.amount}</p>  */}
                        <p>{book.snippet}</p>
                        {/* <a href= {book.selfLink}>Link:</a> */}
                        <img src={book.volumeInfo.imageLinks.thumbnail} />
                    </li>
                ))
                }
            </ul>
        </div>
    )
}
