import React, { useContext } from 'react';
import { Bookcontext } from '../contexts/BookContext';

const Navbar = () => {
    const {books} = useContext(Bookcontext)
    
    return ( 
        <div className='navbar'>
            <h1>My Book List</h1>
            <p>
                You have { books.length } book(s) for reading.
            </p>
        </div>
     );
}
 
export default Navbar;