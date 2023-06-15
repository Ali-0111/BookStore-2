import PropTypes from 'prop-types';

const Buttons = ({ name, filter }) => {
  const removeHandler = () => {
    filter(name);
  };

  return (
    <>
      <button type="button">Comments</button>
      <button type="button" onClick={removeHandler}>Remove</button>
      <button type="button">Edit</button>
    </>
  );
};

Buttons.propTypes = {
  name: PropTypes.string.isRequired,
  filter: PropTypes.func.isRequired,
};
export default Buttons;
