import React from 'react'
import { Provider } from 'react-redux'
import { render } from "@testing-library/react"
import { BrowserRouter as Router } from 'react-router-dom'
import { getMockedState } from '../../store/store'
import { Details} from './BookDetails'
import { BookData } from '../../models/BookModel'
import { MockBooks } from '../../MockBooks';
import "@testing-library/jest-dom";

test("Book Details", async () => {
    const mockStore = getMockedState({ books:  {searchResultBooks:[] as BookData[], 
          books:[], book: MockBooks.books[0] as BookData} });

    render(<Provider store={mockStore}>
        <Router>
            <Details/>
        </Router>
    </Provider>)

})