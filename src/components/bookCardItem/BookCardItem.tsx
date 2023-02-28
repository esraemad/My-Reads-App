import React from 'react'
import { AppDispatch, RootState } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Image, Button, Dropdown, DropdownProps } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom';
import { changeCategory, editShelf } from '../../store/booksSlice';
import { BookData } from '../../models/BookModel';
import {ReadingOptions} from './ReadingOptions';
import "./BookCardItem.css"

function BookCardItem ({ book }: { book: BookData }): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const booksList = useSelector((state: RootState) => state.books.books);

  const handleChangeCategory = (id: string, data: DropdownProps) => {
    let newBooks = [] as BookData[];
    // eslint-disable-next-line array-callback-return
    booksList.map((book) => {
      if (book.id === id) {
        newBooks = [...newBooks, { ...book, shelf: data.value as string }];
      }
      else {
        newBooks = [...newBooks, book]
      }

    })

    dispatch(editShelf({ bookId: id, category: data.value }))
    dispatch((changeCategory(newBooks)))
  }
  return (
    <div className="mr-b">
      <Card>

        {book.imageLinks && <Image className="imagestyle" 
        src={book?.imageLinks?.thumbnail} wrapped ui={false} />}

        <Card.Content>
          {book.authors && <Card.Header>{book?.authors.map(auther => auther)}</Card.Header>}
          {book.publishedDate && <Card.Meta>{book.publishedDate.toString()}</Card.Meta>}
          {book.title && <Card.Description>
          {book.title} </Card.Description>}
        </Card.Content>

        <Card.Content extra>
          <Button basic color='green' onClick={
            () => navigate(`/${book.id}`)}
          >
            Show Details
          </Button>
          <span>
            {' '}
            <Dropdown
              inline
              options={ReadingOptions}
              defaultValue={book.shelf}
              onChange={(e, data) => handleChangeCategory(book.id, data)}
            />
          </span>
        </Card.Content>

      </Card>
    </div>
  )
}
export default BookCardItem
