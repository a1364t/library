import React,{createContext, useEffect, useReducer} from 'react';
import { bookReducer } from '../reducers/BookReducer';


export const Bookcontext = createContext();

const BookContextProvider = (props) => {
const [books, dispatch] = useReducer(bookReducer, [], () => {
    const data = localStorage.getItem('books');
    return data ? JSON.parse(data) : []
})
useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books))
}, [books])

    return ( 
        <Bookcontext.Provider value={{ books, dispatch }}>
            {props.children}
        </Bookcontext.Provider>
     );
}
 
export default BookContextProvider;
