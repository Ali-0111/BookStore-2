import PropTypes from 'prop-types';
import Buttons from './Buttons';

const BookInfo = ({ name, author,id }) => (
  <article>
    {/* div info */}
    <div className="info">
      <h2>{name}</h2>
      <p>{author}</p>
      <Buttons id={id}/>
    </div>
    {/* div progroress */}
  </article>
);

BookInfo.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default BookInfo;
