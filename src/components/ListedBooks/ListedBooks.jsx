
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import WishlistBook from '../WishlistBook/WishlistBook';
import { getReadBookList , getWishlistBook } from '../../Utility/LocalStorage';
import PagesRead from '../PagesRead/PagesRead';

const ListedBooks = () => {

    const books = useLoaderData();

    // ReadBook button function
    const [bookRead, setBookRead] = useState([]);

    useEffect(() => {
        const storeBookIds = getReadBookList();
        if (books.length > 0) {
            const readBook = books.filter(book => storeBookIds.includes(book.bookId))

            setBookRead(readBook);
        }
    }, [])

    console.log(bookRead);



    // WishlistBook button function
    const [bookWishlist, setBookWishlist] = useState([]);

    useEffect(() => {
        const storeWishlistBookId = getWishlistBook();
        if (books.length > 0) {
            const wishlistBook = books.filter(book => storeWishlistBookId.includes(book.bookId))
            setBookWishlist(wishlistBook);
        }
    }, [])

    return (
        <div className='mt-5 mx-5 lg:mx-0'>

            <h1 className='mb-8 text-center pt-4 lg:pt-7 h-[70px] lg:h-[100px] w-full card-img-div text-3xl font-bold'>
                Books
            </h1>



            <Tabs>
                <TabList>
                    <Tab><span className='text-lg'>Read Books</span></Tab>
                    <Tab><span className='text-lg'>Wishlist Books</span></Tab>
                </TabList>

                <TabPanel>
                    <div className='mt-8 pb-[100px] space-y-6'>

                        {
                            bookRead.map(book => <PagesRead
                                key={book.bookId}
                                book={book}
                            ></PagesRead>)
                        }

                    </div>
                </TabPanel>

                <TabPanel>
                    <div className='mt-8 pb-[100px] space-y-6'>

                        {
                            bookWishlist.map(book => <WishlistBook
                                key={book.bookId}
                                book={book}
                            ></WishlistBook>)

                        }
                    </div>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default ListedBooks;