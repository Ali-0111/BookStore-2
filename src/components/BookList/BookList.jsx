import Book from '@/components/BookList/Book';
import { useSelector } from 'react-redux';

const BookList = () => {
  const {bookCollection: collection} = useSelector((store) => (store.books_state));
  return (
    <div className="book-list-wrapper space-y-4 my-10">
      { // returns article
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
