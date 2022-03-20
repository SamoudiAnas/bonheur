import Book from "../../models/book";
import { ADD_BOOK, FETCH_BOOKS } from "../actions/book";

const initialState = {
  books: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      const newBook = new Book(
        action.bookData.id,
        action.bookData.title,
        action.bookData.description,
        action.bookData.imageUrl
      );

      return {
        books: state.books.concat(newBook),
      };
    case FETCH_BOOKS:
      return {
        books: action.fetchedBooks,
      };
  }
  return state;
};
