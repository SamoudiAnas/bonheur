import Book from "../../models/book";

export const ADD_BOOK = "ADD_BOOK";
export const FETCH_BOOKS = "FETCH_BOOKS";

export const addBook = (title, description, imageUrl, category) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://bonheur-9586c-default-rtdb.firebaseio.com/Resume/${category}.json`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title,
            description,
            imageUrl,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Something went wrong while storing the data...");
      }

      const data = await response.json();

      dispatch({
        type: ADD_BOOK,
        category,
        bookData: { id: data.name, title, description, imageUrl },
      });
    } catch (error) {
      throw error;
    }
  };
};

export const fetchBooks = (category) => {
  return async (dispatch) => {
    if (category === "Arab") {
      try {
        const response = await fetch(
          `https://bonheur-9586c-default-rtdb.firebaseio.com/Resume/${category}.json`
        );

        if (!response.ok) {
          throw new Error("Something went wrong while fetching books...");
        }

        const data = await response.json();

        const loadedBooks = [];

        for (const key in data) {
          loadedBooks.push(
            new Book(
              key,
              data[key].title,
              data[key].description,
              data[key].imageUrl
            )
          );
        }
        dispatch({
          type: FETCH_BOOKS,
          category,
          arabFetchedBooks: loadedBooks,
        });
      } catch (error) {
        throw error;
      }
    } else if (category === "French") {
      try {
        const response = await fetch(
          `https://bonheur-9586c-default-rtdb.firebaseio.com/Resume/${category}.json`
        );

        if (!response.ok) {
          throw new Error("Something went wrong while fetching books...");
        }

        const data = await response.json();

        const loadedBooks = [];

        for (const key in data) {
          loadedBooks.push(
            new Book(
              key,
              data[key].title,
              data[key].description,
              data[key].imageUrl
            )
          );
        }
        dispatch({
          type: FETCH_BOOKS,
          category,
          frenchFetchedBooks: loadedBooks,
        });
      } catch (error) {
        throw error;
      }
    } else {
      try {
        const response = await fetch(
          `https://bonheur-9586c-default-rtdb.firebaseio.com/Resume/${category}.json`
        );

        if (!response.ok) {
          throw new Error("Something went wrong while fetching books...");
        }

        const data = await response.json();

        const loadedBooks = [];

        for (const key in data) {
          loadedBooks.push(
            new Book(
              key,
              data[key].title,
              data[key].description,
              data[key].imageUrl
            )
          );
        }
        dispatch({
          type: FETCH_BOOKS,
          category,
          englishFetchedBooks: loadedBooks,
        });
      } catch (error) {
        throw error;
      }
    }
  };
};
