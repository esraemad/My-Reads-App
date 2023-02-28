import bookReducer, { changeCategory, getAllBooks, getBook, editShelf } from "./booksSlice";
import { RootState, store } from "./store";
import { BookData } from "../models/BookModel";
import { MockBooks } from "../MockBooks";


const getState = () => {

    return { books: { books: [], book: {} as BookData } } as RootState
}
const dispatch = jest.fn();

describe("BooksSlice", () => {
    it("should Update state for the books in the storage if the books changes", () => {
        const initialState = undefined;
        const action = changeCategory(MockBooks)
        const result = bookReducer(initialState, action);
        expect(result.books).toEqual(MockBooks);
    });
    it("should return the initialState if the list of book sended with undefined", () => {
        const initialState = undefined;
        const action = changeCategory(undefined)
        const result = bookReducer(initialState, action);
        expect(result.books).toEqual(undefined);
    });

})
describe("booksSlice thunk", () => {

    it("should getAllBooks return all books", async () => {
        await store.dispatch(getAllBooks());
        const actions = store.getState();
        expect(actions.books.books).toBeDefined();
    });

    it("should get book with an id", async () => {
        await store.dispatch(getBook({ bookId: MockBooks.books[1].id }));
        const actions = store.getState();
        expect(actions.books.book).toBeDefined();
        expect(actions.books.book.id).toEqual(MockBooks.books[1].id);
    });

    it("should update book shelf", async () => {
        await store.dispatch(editShelf({ bookId: MockBooks.books[0].id, category: "read" }));
        const actions = store.getState();
        expect(actions.books.books).toBeDefined();
    });
})