import React,{createContext, useState} from 'react';
import {v4 as uuid} from 'uuid'

export const Bookcontext = createContext();

const BookContextProvider = (props) => {
    const [books, setBook] = useState([
        {title: 'Book1', author:'Author 1', id:1},
        {title: 'Book2', author:'Author 2', id:2}
    ])

    const removeBook = (id)=>{
        setBook(books.filter(book=> book.id !== id))
    }

    const addBook = (title, author)=>{
        setBook([...books, {title, author, id:uuid()}])
    }
    
    return ( 
        <Bookcontext.Provider value={{books, removeBook, addBook}}>
            {props.children}
        </Bookcontext.Provider>
     );
}
 
export default BookContextProvider;
