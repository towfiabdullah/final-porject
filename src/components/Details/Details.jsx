import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { Link } from 'react-router-dom';
import { saveReadBooks, saveWishlistBook } from "../../Utility/LocalStorage";

const Details = () => {

    const notify = (value) => toast(value);


    const books = useLoaderData();

    const { bookId } = useParams();
    const idInt = parseInt(bookId);

    const book = books.find(book => book.bookId === idInt);

     // ReadBook button function
    const handleReadBook = () => {
        saveReadBooks(idInt,notify);
      
    }


    // WishlistBook button function
    const handleWishlistBook = () =>{
        saveWishlistBook(idInt,notify);
    }



    return (
        <div className="mt-6 lg:mt-12 grid lg:grid-cols-2 gap-12 work-sans-font pb-[150px]">

            <section className="mx-5 lg:mx-0 lg:h-[670px] lg:w-full card-img-div p-[74px]">
                <img className="w-full lg:h-full" src={book.image} alt="" />
            </section>

            <section className="mx-5 lg:mx-0">

                <h1 className="lg:text-[40px] font-bold">{book.bookName}</h1>
                <p className="lg:text-xl font-medium py-5">By : {book.author}</p>
                <h3 className="lg:text-xl font-medium py-4 border-y-2">{book.category}</h3>
                <p className="py-6"><span className="lg:text-lg  font-bold">Review </span>: {book.review}</p>

                <div className="flex border-b-2 py-6 gap-4">
                    <div className="flex items-center gap-4">
                        <span className="lg:text-lg font-bold ">Tag :</span>
                        <p className="tags-style1"> {book.tags[0]}</p>
                    </div>
                    <p className="tags-style1">{book.tags[1]}</p>
                </div>


                <div className="mt-8 space-y-3">

                    <div className="flex gap-16">
                        <p className="w-[144px]">Number of Pages:</p>
                        <p className="text-base font-semibold">{book.totalPages}</p>
                    </div>

                    <div className="flex gap-16">
                        <p className="w-[144px]">Publisher:</p>
                        <p className="text-base font-semibold">{book.publisher}</p>
                    </div>

                    <div className="flex gap-16">
                        <p className="w-[144px]">Year of Publishing:</p>
                        <p className="text-base font-semibold">{book.yearOfPublishing}</p>
                    </div>

                    <div className="flex gap-16">
                        <p className="w-[144px]">Rating:</p>
                        <p className="text-base font-semibold"> {book.rating}</p>
                    </div>

                </div>

                <div className="mt-9 space-x-5">
                    <button onClick={handleReadBook} className="btn btn-outline font-extrabold px-7">Read</button>
                    <button onClick={handleWishlistBook} className="btn btn-secondary px-8">Wishlist</button>
                </div>

            </section>
            <ToastContainer />
        </div>
    );
};

export default Details;