import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
// import { removeBook } from '@/redux/books/bookSlice';
import { removeBook_API } from '@/apiServices/apiFunc.js';

const Buttons = ({ id }) => {
  const dispatch = useDispatch();
  const removeHandler = () => {
    dispatch(removeBook_API(id));
  };

  return (
    <>
      <button type="button">Comments</button>
      <button
        type="button"
        onClick={removeHandler}
        className="remove-btn"
      >
        Remove
      </button>
      <button type="button">Edit</button>
    </>
  );
};

Buttons.propTypes = {
  id: PropTypes.string.isRequired,
};
export default Buttons;
