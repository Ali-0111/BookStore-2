import BookInfo from './BookInfo';
import { useSelector } from 'react-redux';

const BookList = () => {
  const {bookCollection: collection} = useSelector((store) => (store.books_state));
  return <div className="book-list-wrapper">
    <h2>List of the Book...</h2>
    {
      Object.keys(collection).map((item_id, i) => (
        <BookInfo
          key={`${i + 1}book.name`}
          author={collection[item_id][0].author}
          name={collection[item_id][0].title}
          id={item_id}
        />
      ))
      }
    <hr />
  </div>
};


export default BookList;
