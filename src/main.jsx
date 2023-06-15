import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from '@/redux/store.js'

import BookStore from './BookStore.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Provider store={store}>
      <BookStore />
    </Provider>
  </>,
)
