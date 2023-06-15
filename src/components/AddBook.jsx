import { useState } from 'react';
import PropTypes from 'prop-types';

const AddBook = ({ update }) => {
  const [bookName, setBookName] = useState('');
  const [authorName, setAuthorName] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    update(bookName, authorName);
    setBookName('');
  };

  const inputHandler = (e) => {
    // input handler is for taking bookname
    setBookName(e.target.value);
  };

  const selectHandler = (e) => {
    // selectHandler is for selecting authors
    setAuthorName(e.target.value);
  };

  return (
    <>
      <form className="form-wrapper" onSubmit={submitHandler}>
        <input
          type="text"
          value={bookName}
          placeholder="Book Name"
          onChange={inputHandler}
          required
        />

        <select required onChange={selectHandler}>
          <option value="">--Select author--</option>
          <option value="author1">author1</option>
          <option value="author2">author2</option>
        </select>
        <button type="submit">Add</button>

      </form>
    </>
  );
};

AddBook.propTypes = {
  update: PropTypes.func.isRequired,
};

export default AddBook;
