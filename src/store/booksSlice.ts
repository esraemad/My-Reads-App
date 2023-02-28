import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Api } from "../ApiData/Api";
import { BookData } from "../models/BookModel";

export const getAllBooks = createAsyncThunk<BookData[], void>("books/getAllBooks", async () => {
    const { baseUrl, headers } = Api();

    const books = await fetch(`${baseUrl}/books`, { headers })
        .then((res) => res.json())
        .then((data) => data.books);
    return books
});

export const getBook = createAsyncThunk<BookData, any>("books/getBook", async ({ bookId }) => {
    const { baseUrl, headers } = Api();

    const book = await fetch(`${baseUrl}/books/${bookId}`, { headers })
        .then((res) => res.json())
        .then((data) => data.book);
    return book
});

export const editShelf = createAsyncThunk<any, any>("books/editShelf", async ({ bookId, category }) => {
    const { baseUrl, headers } = Api();

    console.log(category)
    const books = await fetch(`${baseUrl}/books/${bookId}`, {
        method: "PUT",
        headers: {
            ...headers,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ shelf: category }),
    }).then((res) => res.json());
    return books
});

export const searchBook = createAsyncThunk<BookData[], any>("books/searchBook", async ({ query }) => {
    const { baseUrl, headers } = Api();
    const searchResult = await fetch(`${baseUrl}/search`, {
        method: "POST",
        headers: {
            ...headers,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ query, maxResults: 10 }),
    })
        .then((res) => res.json())
        .then((data) => data.books);
    return searchResult;
});

const bookSlice = createSlice({
    name: "books",
    initialState: {
        books: [] as BookData[],
        book: {} as BookData,
        searchResultBooks: [] as BookData[]
    },
    reducers: {
        changeCategory: (state, action) => {
            state.books = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getAllBooks.pending, (state, action) => {
            console.log("Fetching All Data...");
        })
        builder.addCase(getAllBooks.fulfilled, (state, action) => {
            console.log(state);
            state.books = action.payload
        })
        builder.addCase(editShelf.pending, (state, action) => {
            console.log("editing Book category...");
        })
        builder.addCase(editShelf.fulfilled, (state, action) => {
            console.log(action.payload)
        })
        builder.addCase(getBook.pending, (state, action) => {
            console.log("fetching a Book ...");
        })
        builder.addCase(getBook.fulfilled, (state, action: PayloadAction<BookData>) => {
            state.book = action.payload as BookData
        })
        builder.addCase(searchBook.pending, (state, action) => {
            console.log("searching books...");
        })
        builder.addCase(searchBook.fulfilled, (state, action) => {
            console.log(action.payload)
            state.searchResultBooks = action.payload
        })
    }
})

export const { changeCategory } = bookSlice.actions;
export default bookSlice.reducer;