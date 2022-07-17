import React,{createContext, useReducer} from 'react';
import { bookReducer } from '../reducers/BookReducer';


export const Bookcontext = createContext();

const BookContextProvider = (props) => {
const [books, dispatch] = useReducer(bookReducer, []);

    return ( 
        <Bookcontext.Provider value={{ books, dispatch }}>
            {props.children}
        </Bookcontext.Provider>
     );
}
 
export default BookContextProvider;
