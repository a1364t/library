import React, { useContext } from 'react';
import { Bookcontext } from '../contexts/BookContext';
import BookDetails from './BookDetails';

const BookList = () => {
    const{books} = useContext(Bookcontext)
    return books.length?( 
        <div className='book-list'>
            <ul>
                {books.map(book=>{
                    return(
                        <BookDetails key={book.id} book={book}/>
                    )
                })}
            </ul>
        </div>
     ):(
        <div className='empty'>
            No Book Found!
        </div>
     )
}
 
export default BookList;