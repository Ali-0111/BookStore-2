import {useState} from 'react';
import Alert from '@/components/BookList/Alert';

export default function BookChapterReport() {
  const [alert, setAlert] = useState(false);

  const alertHandler = () => {
    setAlert(true)
    setTimeout(() => {setAlert(false)}, 2000)
  };
  return(
    <div className="max-xs:px-[0.75rem]">
      <p className="text-style-7 max-xs:text-[10px] opacity-50">CURRENT CHAPTER</p>
      <p className="text-style-4 max-xs:text-sm">Chapter 17</p>
      
      <button
        type="button"
        className="py-1 px-4 max-xs:px-1 max-xs:text-left text-white-two text-sm my-4
        bg-azure rounded-[3px] font-roboto font-light
        tracking-[0.5px] cursor-pointer"
        onClick = {alertHandler}

      >
        UPDATE PROGRESS
      </button>

      {alert && <Alert />}
    </div>
  );
}