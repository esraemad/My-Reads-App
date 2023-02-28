import React from 'react'
import { Provider } from 'react-redux'
import { render, screen } from "@testing-library/react"
import { BrowserRouter as Router } from 'react-router-dom'
import { getMockedState } from '../../store/store'
import SearchBar from './SearchBar'
import userEvent from "@testing-library/user-event";
import { MockBooks } from '../../MockBooks'
import { BookData } from '../../models/BookModel'
import "@testing-library/jest-dom";

test("Book Search", async () => {
    const mockStore = getMockedState({ books:  {searchResultBooks:[] as BookData[], 
          books: MockBooks.books as BookData[], book: {} as BookData} });

    render(<Provider store={mockStore}>
        <Router>
            <SearchBar/>
        </Router>
    </Provider>)

    const searchBar = screen.getByRole('textbox');
    const user = userEvent.setup();
    await user.type(searchBar, "searchBar");
})