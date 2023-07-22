import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook_API } from '@/apiServices/apiFunc.js';

const Buttons = ({ id, setAlert}) => {
  const dispatch = useDispatch();

  const removeHandler = () => {
    dispatch(removeBook_API(id));
  };

  const alertHandler = () => {
    setAlert(true)
    setTimeout(() => {setAlert(false)}, 2000)
  };

  return (
    <div className="buttons-wrapper max-xs:flex max-xs:flex-col max-xs:items-start text-style-8 mt-4">
      <button type="button" className="h-6 cursor-pointer" onClick={alertHandler}>
        Comments
      </button>
      <button
        className="remove-btn h-6 cursor-pointer"
        type="button"
        onClick={removeHandler}
      >
        Remove
      </button>
      <button type="button" className=" h-6 cursor-pointer" onClick={alertHandler}>
        Edit
      </button>
    </div>
  );
};

Buttons.propTypes = {
  id: PropTypes.string.isRequired,
  setAlert: PropTypes.func.isRequired,
};
export default Buttons;
