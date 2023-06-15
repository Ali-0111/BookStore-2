import { useState } from 'react';
import AddBook from '@/components/AddBook.jsx';
import BookList from '@/components/BookList/BookList.jsx';

const Books = () => {
  const [collection, setCollection] = useState([{ name: 'Math', author: 'Safari' }]);

  const update = (bookName, authorName) => {
    setCollection([...collection,
      { name: bookName, author: authorName }]);
  };

  const filter = (name) => {
    const newCol = collection.filter((object) => object.name !== name);
    setCollection(newCol);
  };

  return (
    <section>
      <BookList collection={collection} filter={filter} />
      <AddBook update={update} />
    </section>
  );
};

export default Books;
