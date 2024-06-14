
import { useEffect, useState } from "react";
import BookCard from "../BookCard/BookCard";

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(()=>{
        fetch('Book.json')
        .then(res =>res.json())
        .then(data => setBooks(data))
    },[])

    return (
        <div className="mt-[20px] lg:mt-[100px] playfair-display-font">
            <h1 className="text-[30px] lg:text-[40px] font-bold text-center mb-9">Books</h1>
            
            <div className="mx-5 lg:mx-0 grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-6">
                {
                    books.map(book => <BookCard 
                        key={book.bookId}
                        book={book}
                        ></BookCard>)

                }
            </div>
        </div>
    );
};

export default Books;