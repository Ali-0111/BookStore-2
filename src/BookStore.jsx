import '@/styles/Global.css'
import { useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Routes from '@/components/Routes/RoutesConfig.jsx';

function BookStore() {
  const store = useSelector((store) => store);
  console.log(store);
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
