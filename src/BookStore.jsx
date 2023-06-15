import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Routes from '@/components/Routes/RoutesConfig.jsx';
import '@/styles/Global.css'

function BookStore() {
  const store = useSelector((store) => store);
  useEffect(() => {
    console.log(store);
  }, [store]);
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes />
      </main>
    </BrowserRouter>
  )
}

export default BookStore;
