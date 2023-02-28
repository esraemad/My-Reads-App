import React from 'react'
import { store } from '../../store/store'
import { Provider } from 'react-redux'
import { render } from "@testing-library/react"
import { BrowserRouter as Router } from 'react-router-dom'
import { MainPage } from './MainPage'
import "@testing-library/jest-dom";

test("Main Page", async () => {

    render(<Provider store={store}>
        <Router>
            <MainPage />
        </Router>
    </Provider>)

})