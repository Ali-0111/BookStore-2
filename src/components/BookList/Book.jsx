import PropTypes from 'prop-types';
import BookTextInfo from '@/components/BookList/BookTextInfo';
import Buttons from '@/components/BookList/Buttons';
import CircleProgress from '@/components/BookList/CircleProgress';
import BookProgressText from '@/components/BookList/BookProgressText';
import BookChapterReport from '@/components/BookList/BookChpaterReport';

const Book = ({ name, author,id }) => (
  <article className="book-card h-40 bg-white px-6 py-8 flex justify-between items-center space-x-20">

    <div className="flex-1">
      <BookTextInfo name={name} author={author} />
      <Buttons id={id}/>
    </div>

    <div className="flex-1 flex justify-center items-center border-r">
      <CircleProgress />
      <BookProgressText />
    </div>

    <div className="flex-1">
      <BookChapterReport />
    </div>
  </article>
);

Book.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
