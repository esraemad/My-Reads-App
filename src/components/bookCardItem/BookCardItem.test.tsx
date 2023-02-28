import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { getMockedState } from '../../store/store'
import { render, screen } from "@testing-library/react"
import BookCardItem from './BookCardItem'
import userEvent from "@testing-library/user-event";
import { MockBooks } from '../../MockBooks'
import { BookData } from '../../models/BookModel'
import "@testing-library/jest-dom";

test("Book Card Item", async () => {
    const book = MockBooks.books[0] as BookData
    const mockStore = getMockedState({ books: { searchResultBooks: [] as BookData[],
          books: MockBooks.books as BookData[], book: {} as BookData } });

    render(<Provider store={mockStore}>
        <Router>
            <BookCardItem book={book} />
        </Router>
    </Provider>)

    const list = screen.getByRole("listbox")
    const user = userEvent.setup();
    const option = screen.getByRole('option', { name: 'read' }) as HTMLOptionElement
    await user.click(option)
    expect(list).toBeInTheDocument();
    expect(option).toBeInTheDocument()

})