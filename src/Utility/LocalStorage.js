
// ReadBook button function
const getReadBookList = () =>{
    const storeReadBook = localStorage.getItem('read-book');

    if(storeReadBook){
        return JSON.parse(storeReadBook);
    }
    return [];
}


// ReadBook button function
const saveReadBooks = (id,notify) =>{
    const storeReadBooks = getReadBookList();

    const exists = storeReadBooks.find(bookId => bookId === id);

    if(!exists){
        storeReadBooks.push(id);
        localStorage.setItem('read-book',JSON.stringify(storeReadBooks)); 
        notify('Books Added to Read List');
    }
    else{
        notify('You have Already Read this Books');
    }
}


// WishlistBook button function
const getWishlistBook = () =>{
    const storeWishlistBook = localStorage.getItem('Wishlist-book');

    if(storeWishlistBook){
        return JSON.parse(storeWishlistBook);
    }
    return [];
}

// WishlistBook button function
const saveWishlistBook = (id,notify) =>{
    const storeReadBooks = getReadBookList(); // to check condition

    const storeWishlistBooks = getWishlistBook(); // apply data 

    const exists = storeReadBooks.find(bookId => bookId === id);

    if(!exists){
        storeWishlistBooks.push(id);
        localStorage.setItem('Wishlist-book',JSON.stringify(storeWishlistBooks));
        notify('Books Added to WishList');
    }
    else{
        notify('You have Already Read this Books');
    }

}



export {saveReadBooks, saveWishlistBook, getReadBookList , getWishlistBook}