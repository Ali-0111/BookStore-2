import { useDispatch } from 'react-redux';
import { checkStatus } from '@/redux/categories/categorySlice';
import { useEffect } from 'react'; 
import { useSelector } from 'react-redux';

const Category = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(checkStatus());
  }, []);
  const {category_state} = useSelector((store) => (store));
  return (
    <div className="container mx-auto">
      <h2> {category_state} </h2>
    </div>
  );
};

export default Category;