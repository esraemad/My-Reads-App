import React from 'react';
import { BookData } from '../../models/BookModel';
import { Grid } from 'semantic-ui-react';
import { BookShelf } from '../bookShelf/BookShelf';
import "./SearchResult.css";

export const SearchResult = ({ books }: { books: BookData[] }) => {

    return (
        <div className="search-books-results">
        <Grid >
            <Grid><BookShelf books={books} /></Grid>
        </Grid>
        </div>
    )
}
