import React from 'react';
import { BookData } from '../../models/BookModel';
import { Grid } from 'semantic-ui-react';
import { BookShelf } from '../bookShelf/BookShelf';

export const BookList = ({ books }: { books: BookData[] }) => {
    return (
        <Grid >
            <Grid><BookShelf books={books} shelf="currentlyReading" /></Grid>
            <Grid><BookShelf books={books} shelf="read" /></Grid>
            <Grid><BookShelf books={books} shelf="wantToRead" /></Grid>
        </Grid>
    )
}
