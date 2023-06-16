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
    <div className="buttons-wrapper text-style-8 mt-4">
      <button type="button" className=" h-6">
        Comments
      </button>
      <button
        className="remove-btn h-6 px-4 mx-4 border-l border-r border-white-three"
        type="button"
        onClick={removeHandler}
      >
        Remove
      </button>
      <button type="button" className=" h-6">
        Edit
      </button>
    </div>
  );
};

Buttons.propTypes = {
  id: PropTypes.string.isRequired,
};
export default Buttons;
