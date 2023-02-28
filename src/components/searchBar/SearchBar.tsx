import React  from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../store/store';
import { Input } from 'semantic-ui-react'
import { BookData } from '../../models/BookModel';
import { SearchResult } from '../searchResult/SearchResult';
import { searchBook } from '../../store/booksSlice';
import "./SearchBar.css";

function SearchBar(): JSX.Element {

    const books = useSelector<RootState, BookData[]>((state) => state.books.searchResultBooks) ;
    const dispatch = useDispatch<AppDispatch>();

    const searchForBookHandler = (event) => {
     dispatch(searchBook({query:event.target.value}))
    }
   
    return (
        <>
        <Input className='search-books-input-wrapper search-books-bar search-books-bar input'
         icon='search' placeholder='Search...' onChange={searchForBookHandler}/>
        <div className="padding-body">
         { <SearchResult books={books}></SearchResult> }
        </div>
        </>)
    }
export default SearchBar