import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '@/redux/books/bookSlice';

const Buttons = ({ id }) => {
  const dispatch = useDispatch();
  const removeHandler = () => {
    dispatch(removeBook(id));
  };

  return (
    <>
      <button type="button">Comments</button>
      <button type="button" onClick={removeHandler}>
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
