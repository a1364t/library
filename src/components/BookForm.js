import React,{useState, useContext} from "react";
import { Bookcontext } from "../contexts/BookContext";

const BookForm = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor]= useState('');
    
    const{ dispatch }= useContext(Bookcontext);
    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch({type: 'ADD_BOOK', book:{ title, author }});
        setAuthor('');
        setTitle('');
        
    }
    return ( 
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Book Name" value={title} required
                onChange={(e)=>setTitle(e.target.value)}
            />
            <input type="text" placeholder="Author" value={author} required
                onChange={(e)=>setAuthor(e.target.value)}
            />
           
            <input type="submit" value="Add Book"/>
        </form>
     );
}
 
export default BookForm;