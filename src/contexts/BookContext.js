import React,{createContext, useState} from 'react';
import {v4 as uuid} from 'uuid'

export const Bookcontext = createContext();

const BookContextProvider = (props) => {
    const [books, setBook] = useState([
        {title: 'Book1', author:'Author 1', year:'2020', id:1},
        {title: 'Book2', author:'Author 2', year:'2020', id:2}
    ])

    const removeBook = (id)=>{
        setBook(books.filter(book=> book.id !== id))
    }

    const addBook = (title, author, year)=>{
        setBook([...books, {title, author, year, id:uuid()}])
    }
    
    return ( 
        <Bookcontext.Provider value={{books, removeBook, addBook}}>
            {props.children}
        </Bookcontext.Provider>
     );
}
 
export default BookContextProvider;
