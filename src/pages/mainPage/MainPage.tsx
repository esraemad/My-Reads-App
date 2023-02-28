import React, { useEffect } from 'react'
import { BookData } from '../../models/BookModel';
import { useDispatch, useSelector } from 'react-redux';
import { BookList } from '../../components/bookItemsList/BookItemsList';
import { AppDispatch, RootState } from '../../store/store';
import { getAllBooks } from '../../store/booksSlice';
import { useNavigate } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

import "./MainPage.css"

export const MainPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const books = useSelector<RootState, BookData[]>((state) => state.books.books);

  useEffect(() => {
    dispatch(getAllBooks());
  }, []);

  return (
    <>
      <div className="app">
        <div className="bk">
          My Reads
        </div>
        <div className="ser">
          <Button className="btn btn-primary" onClick={() => navigate("/search")}> 🔍Search Here </Button>
        </div>
        <div className="padding-body">
          <BookList books={books}></BookList>
        </div>
      </div>
    </>
  )
}
