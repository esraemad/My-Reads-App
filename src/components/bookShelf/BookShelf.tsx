import React from 'react'
import { BookData } from '../../models/BookModel';
import BookCardItem from '../bookCardItem/BookCardItem';

export const BookShelf = ({ books, shelf }: { books: BookData[], shelf?: string }) => {

  const shlfedBooks = shelf !== undefined ? books.filter(book => book.shelf === shelf) : books;
  
  return (
    <>
      {shelf && <h2>{shelf}</h2>}
      {Array.isArray(shlfedBooks) && shlfedBooks.map((book) =>
        <BookCardItem book={book} key={book.id} />
      )}
    </>
  )
}
