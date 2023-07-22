import PropTypes from 'prop-types';

const BookTestInfo = ({name, author}) => {
  return (
    <>
      <p 
        className="category font-montserrat font-bold opacity-50 text-sm"
      >
        Action
      </p>
      <h2 className="book-name text-lg font-bold sm:text-style-5">{name}</h2>
      <p className="book-author text-style-8">{author}</p>
    </>
  );
};

BookTestInfo.propTypes = {
  name: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
}
export default BookTestInfo;