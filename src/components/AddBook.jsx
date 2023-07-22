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
    <div className="form-wrapper mt-5 mb-10
      container px-2 mx-auto font-montserrat text-sm"
    >
      <h2 className="text-style-10">ADD NEW BOOK</h2>
      <form className="my-5 flex justify-between items-center"
        onSubmit={submitHandler}
      >
      <input
        className="w-[50%] py-2 px-4 outline-none border border-e8e8e8 rounded-[4px]"
        type="text"
        name="title"
        value={formDB.title}
        placeholder="Book Name"
        onChange={inputHandler}
        required
      />

      <input
        className="w-[30%] py-2 px-4 outline-none border border-e8e8e8 rounded-[4px]"
        type="text"
        name="author"
        value={formDB.author}
        placeholder="Author Name"
        onChange={inputHandler}
        required
      />

      <button type="submit"
        className="add-btn w-[15%] py-2 px-4 bg-azure
        border border-e8e8e8 rounded-[4px] text-white">
        Add
      </button>
    </form>
  </div>  
  );
};

export default AddBook;
