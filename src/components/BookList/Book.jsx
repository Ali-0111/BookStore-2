import PropTypes from 'prop-types';
import { useState } from 'react';
import BookTextInfo from '@/components/BookList/BookTextInfo';
import Buttons from '@/components/BookList/Buttons';
import CircleProgress from '@/components/BookList/CircleProgress';
import BookProgressText from '@/components/BookList/BookProgressText';
import BookChapterReport from '@/components/BookList/BookChpaterReport';
import Alert from '@/components/BookList/Alert';

const Book = ({ name, author,id }) => {
  const [alert, setAlert] = useState(false);
  return (
    <article className="relative border book-card h-40 max-xs:h-[170px] bg-white max-xs:px-2 px-6 py-8 flex justify-between items-center">

      <div className="flex-1">
        <BookTextInfo name={name} author={author} />
        <Buttons id={id} setAlert={setAlert}/>
        {alert && <Alert />}
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
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
