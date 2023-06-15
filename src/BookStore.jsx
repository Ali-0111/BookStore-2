import '@/styles/Global.css'
import { useSelector } from 'react-redux';

function BookStore() {
  const store = useSelector((store) => store);
  console.log(store);
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
  </h1>
  )
}

export default BookStore;
