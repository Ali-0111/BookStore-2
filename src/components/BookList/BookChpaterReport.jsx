import {useState} from 'react';
import Alert from '@/components/BookList/Alert';

export default function BookChapterReport() {
  const [alert, setAlert] = useState(false);

  const alertHandler = () => {
    setAlert(true)
    setTimeout(() => {setAlert(false)}, 2000)
  };
  return(
    <div className="px-[0.75rem]">
      <p className="text-[10px] font-bold sm:text-style-7 opacity-90 sm:opacity-50">CURRENT CHAPTER</p>
      <p className="text-[10px] sm:text-style-4">Chapter 17</p>
      
      <button
        type="button"
        className="py-1 px-1 sm:px-4  text-left sm:text-center text-white-two text-sm my-4
        bg-azure rounded-[3px] font-roboto font-light
        tracking-[0.5px] cursor-pointer"
        onClick = {alertHandler}
      >
        UPDATE
      </button>

      {alert && <Alert />}
    </div>
  );
}