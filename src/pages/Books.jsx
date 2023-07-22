import AddBook from '@/components/AddBook.jsx';
import BookList from '@/components/BookList/BookList.jsx';

const Books = () => {
  return (
    <section className="container mx-auto">
      <BookList />
      <hr />
      <AddBook />
    </section>
  );
};

export default Books;
