import { useRoutes } from 'react-router-dom';
import Books from '@/pages/Books.jsx';
import Categories from '@/pages/Categories.jsx';

export default function AppRoutes() {
  const elements = [
    {
      path: '/',
      element: <Books />,
      children: [],
    },
    {
      path: '/categories',
      element: <Categories />,
      children: [],
    },
  ];
  const appRoutes = useRoutes(elements);
  return appRoutes;
}