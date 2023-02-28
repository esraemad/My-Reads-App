import React from 'react'
import { render } from "@testing-library/react"
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { store } from '../../store/store'
import {Search} from './Search'

import "@testing-library/jest-dom";

test("Search Page", async () => {

    render(<Provider store={store}>
        <Router>
            <Search/>
        </Router>
    </Provider>)

})