import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';
import { addNewBook } from '@/redux/books/bookSlice';
const AddBook = () => {
  const dispatch = useDispatch();
  const [formDB, setFormDB] = useState({name:'', author:''});

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addNewBook(formDB));
    setFormDB({name:'', author:''});
  };

  const inputHandler = (e) => {
    const value = e.target.value;
    setFormDB({...formDB, [e.target.name]: value, id:v4()});
  };

  return (
    <>
      <form className="form-wrapper" onSubmit={submitHandler}>
        <input
          type="text"
          name="name"
          value={formDB.name}
          placeholder="Book Name"
          onChange={inputHandler}
          required
        />

        <input
          type="text"
          name="author"
          value={formDB.author}
          placeholder="Author Name"
          onChange={inputHandler}
          required
        />

        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default AddBook;
