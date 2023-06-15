import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';
import { addBook_API } from '@/apiServices/apiFunc';

const AddBook = () => {
  const dispatch = useDispatch();
  const [formDB, setFormDB] = useState({
    title:'',
    author:'',
    category: 'NA'
  });

  const resetForm = () => {
    setFormDB({
      title: '',
      author: '',
      category: 'NA'
    });
  }

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addBook_API(formDB));
    resetForm();
  };

  const inputHandler = (e) => {
    const {name, value} = e.target;
    setFormDB({
      ...formDB,
      [name]: value,
      item_id: v4()
    });
  };

  return (
    <form className="form-wrapper" onSubmit={submitHandler}>
      <input
        type="text"
        name="title"
        value={formDB.title}
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

      <button type="submit" className="add-btn">Add</button>
    </form>
  );
};

export default AddBook;
