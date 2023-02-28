import React from 'react'
import BookCardItem from '../../components/bookCardItem/BookCardItem';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';  
export const Details = () => {
    const book = useSelector((state : RootState) =>state.books.book);
    return(<BookCardItem book={book}></BookCardItem>)
}