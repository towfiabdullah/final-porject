import PropTypes from 'prop-types';
import { BiStar } from "react-icons/bi";
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const BookCard = ({ book }) => {

    // eslint-disable-next-line react/prop-types
    const { bookId, image, tags, bookName, author, category, rating } = book;

    return (
        <Link to={`/details/${bookId}`} className='p-6 card work-sans-font'>

            <div className='p-7 h-[280px] card-img-div flex justify-center'>
                <img className='rounded w-fit h-full' src={image} alt="" />
            </div>

            <div className='flex gap-4 mt-6'>
                <p className='tags-style1'>{tags[0]}</p>
                <p className='tags-style1'>{tags[1]}</p>
            </div>

            <h1 className='text-2xl font-bold py-4'>{bookName}</h1>
            <p className='text-base font-medium pb-5 border-b-2 border-dashed'>By : {author}</p>

            <div className='flex justify-between mt-5 text-base font-medium'>
                <p>{category}</p>
                <div className='flex items-center gap-2'>
                    <p>{rating}</p>
                    <BiStar />
                </div>
            </div>

        </Link>
    );
};

BookCard.prototype = {
    book: PropTypes.object,
}


export default BookCard;