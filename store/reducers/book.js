import Book from "../../models/book";
import { ADD_BOOK, FETCH_BOOKS } from "../actions/book";

const initialState = {
  arab: [],
  french: [],
  english: [],
  books: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      switch (action.category) {
        case "Arab":
          const arabBook = new Book(
            action.bookData.id,
            action.bookData.title,
            action.bookData.description,
            action.bookData.imageUrl
          );
          return {
            ...state,
            arab: state.arab.concat(arabBook),
          };
        case "French":
          const frenchBook = new Book(
            action.bookData.id,
            action.bookData.title,
            action.bookData.description,
            action.bookData.imageUrl
          );
          return {
            ...state,
            french: state.french.concat(frenchBook),
          };
        case "English":
          const englishBook = new Book(
            action.bookData.id,
            action.bookData.title,
            action.bookData.description,
            action.bookData.imageUrl
          );
          return {
            ...state,
            english: state.english.concat(englishBook),
          };
      }

    case FETCH_BOOKS:
      switch (action.category) {
        case "Arab":
          return {
            ...state,
            arab: action.arabFetchedBooks,
          };
        case "French":
          return {
            ...state,
            french: action.frenchFetchedBooks,
          };

        case "English":
          return {
            ...state,
            english: action.englishFetchedBooks,
          };
      }
  }
  return state;
};
