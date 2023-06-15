import BookInfo from './BookInfo';
import { useSelector } from 'react-redux';

const BookList = () => {
  const {books_state:collection} = useSelector((store) => (store));
  return <div className="book-list-wrapper">
    <h2>List of the Book...</h2>
    {
      collection.map((book, i) => (
        <BookInfo
          key={`${i + 1}book.name`}
          author={book.author}
          name={book.name}
          id={book.id}
        />
      ))
      }
    <hr />
  </div>
};


export default BookList;
