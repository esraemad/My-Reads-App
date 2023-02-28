import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css'
import { MainPage } from './pages/mainPage/MainPage';
import { Search } from './pages/search/Search';
import { Details } from './pages/bookDetails/BookDetails';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../src/store/store'
import { BookData } from './models/BookModel';
import { getBook } from './store/booksSlice';

const router = createBrowserRouter([
  {path:"/",
    element:<MainPage/>},
      {index:true, element:<MainPage/>},
     { path:"/home",
    element:<MainPage/>},
      {
        path:"/search",
        element:<Search />
      },
      {
        path:"/:id",
        element:<Details/>,
        loader: (data : any) => {
          console.log(data.params.id)
          let book = store.dispatch(getBook({bookId:data.params.id}));
          console.log(book);
          return book;
        }
      },
    
])
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
      <RouterProvider router={router}/>
      </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
