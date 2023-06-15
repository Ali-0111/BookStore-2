import PropTypes from 'prop-types';
import Buttons from './Buttons';

const BookInfo = ({ name, author, filter }) => (
  <article>
    {/* div info */}
    <div className="info">
      <h2>{name}</h2>
      <p>{author}</p>
      <Buttons name={name} filter={filter} />
    </div>
    {/* div progroress */}
  </article>
);

BookInfo.propTypes = {
  name: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  filter: PropTypes.func.isRequired,
};

export default BookInfo;
