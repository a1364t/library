import React,{useState, useContext} from "react";
import { Bookcontext } from "../contexts/BookContext";

const BookForm = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor]= useState('');
    const [year, setYear]= useState('')
    const{addBook}= useContext(Bookcontext);
    const handleSubmit=(e)=>{
        e.preventDefault();
        addBook(title, author, year);
        setAuthor('');
        setTitle('');
        setYear('');
    }
    return ( 
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Book name" value={title} required
                onChange={(e)=>setTitle(e.target.value)}
            />
            <input type="text" placeholder="Author" value={author} required
                onChange={(e)=>setAuthor(e.target.value)}
            />
            <input type="text" placeholder="Year" value={year} required
                onChange={(e)=>setYear(e.target.value)}
            />
            <input type="submit" value="Add Book"/>
        </form>
     );
}
 
export default BookForm;