import React, {useContext} from "react";
import { Bookcontext } from "../contexts/BookContext";


const BookDetails = ({book}) => {
    const{removeBook} = useContext(Bookcontext)
    return ( 
        <li onClick={()=>removeBook(book.id)}>
            <div className="title">{book.title}</div>
            <div className="author">{book.author}</div>
        </li>
     );
}
 
export default BookDetails;