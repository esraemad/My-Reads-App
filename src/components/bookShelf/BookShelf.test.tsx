import React from 'react'
import { render, screen } from "@testing-library/react"
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { getMockedState } from '../../store/store'
import { BookShelf } from './BookShelf'
import { MockBooks } from '../../MockBooks'
import { BookData } from '../../models/BookModel'
import "@testing-library/jest-dom";

test("Book Shelf", async () => {
    const books = MockBooks.books as BookData[]
    const mockStore = getMockedState({ books: { searchResultBooks: [] as BookData[],
          books: MockBooks.books as BookData[], book: {} as BookData } });

    render(<Provider store={mockStore}>
        <Router>
            <BookShelf books={books} shelf="shelf" />
        </Router>
    </Provider>)

    const h1 = screen.getByRole('h1');
    expect(h1).toHaveTextContent("shelf");

})