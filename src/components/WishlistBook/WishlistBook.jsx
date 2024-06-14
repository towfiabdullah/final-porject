import { HiOutlineUsers } from "react-icons/hi2";
import { RiPagesFill } from "react-icons/ri";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const WishlistBook = ({ book }) => {


    return (
        <div className='lg:h-[290px] card-style flex flex-col lg:flex-row p-6 gap-7'>

            <div className='lg:w-[240px] h-[330px] lg:h-full card-img-div flex justify-center px-12 py-7'>
                <img src={book.image} alt="" />
            </div>


            <div>

                <h1 className='font-bold text-2xl'>{book.bookName}</h1>
                <p className='text-base font-medium pt-4'>By : {book.author}</p>

                <div className="flex flex-col lg:flex-row py-4 gap-4 lg:items-center">

                    <div className='flex gap-2'>
                        <div className="flex items-center gap-4">
                            <span className="text-lg font-bold">Tag :</span>
                            <p className="tags-style"> {book.tags[0]}</p>
                        </div>
                        <p className="tags-style">{book.tags[1]}</p>
                    </div>

                    <div className="flex items-center gap-2">
                        <IoLocationOutline />
                        <p className='text-base font-normal'>
                            Year of Publishing: {book.yearOfPublishing}
                        </p>
                    </div>

                </div>

                <div className='pb-4 flex flex-col lg:flex-row gap-4 lg:gap-10 text-base font-normal'>
                    <div className="flex items-center gap-1">
                        <HiOutlineUsers />
                        <p> Publisher : {book.publisher}</p>
                    </div>

                    <div className="flex items-center gap-2">
                        <RiPagesFill />
                        <p>Page {book.totalPages}</p>
                    </div>
                </div>

                <div className='lg:w-[830px] border-b-2'></div>

                <div className='flex flex-col lg:flex-row gap-4 mt-4 items-center'>

                    <div className='space-x-4 space-y-2'>
                        <button className='category-btn'>Category: {book.category}</button>
                        <button className='tags-style'>Rating: {book.rating}</button>
                    </div>

                    <Link to={`/details/${book.bookId}`}>
                        <button className='view-details ml-16 lg:ml-0 mt-4 lg:mt-0'>View Details</button>
                    </Link>
                </div>

            </div>

        </div>
    );
};




export default WishlistBook;