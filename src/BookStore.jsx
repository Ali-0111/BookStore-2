import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Header from '@/components/Header/Header.jsx';
import Routes from '@/components/Routes/RoutesConfig.jsx';
import { getBooks_API } from '@/apiServices/apiFunc.js';
import '@/styles/Global.css'

function BookStore() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks_API());
  }, []);
  return (
    <BrowserRouter>
      <Header />
      <main className="flex-1 bg-pale-grey">
        <Routes />
      </main>
    </BrowserRouter>
  )
}

export default BookStore;
