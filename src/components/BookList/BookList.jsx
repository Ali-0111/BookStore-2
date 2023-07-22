import Book from '@/components/BookList/Book';
import { useSelector } from 'react-redux';
import Loading from '@/components/BookList/Loading'

const BookList = () => {
  const {bookCollection: collection, isLoading} = useSelector((store) => (store.books_state));
  return (
    <div className="book-list-wrapper  max-xs:px-2 space-y-4 my-10">
      { // returns article
        isLoading ? <Loading /> :
          Object.keys(collection).map((item_id, i) => (
            <Book
              key={`${i + 1}book.name`}
              author={collection[item_id][0].author}
              name={collection[item_id][0].title}
              id={item_id}
            />
        ))
      }
    </div>
  );
};


export default BookList;
