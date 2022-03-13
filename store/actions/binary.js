export const ADD_BINARY = "ADD_BINARY";
export const FETCH_BINARY = "FETCH_BINARY";

// Binary Model
import Binary from "../../models/binary";

export const addBinary = (
  imageUri,
  title,
  date,
  description,
  participants,
  category
) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://bonheur-9586c-default-rtdb.firebaseio.com/" +
          category +
          "/binaries.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            imageUri,
            title,
            date,
            description,
            participants,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Something went wrong while posting the data...");
      }

      const data = await response.json();

      dispatch({
        type: ADD_BINARY,
        binaryData: {
          id: data.name,
          imageUri,
          title,
          date,
          description,
          participants: 0,
        },
      });
    } catch (error) {
      throw error;
    }
  };
};

export const fetchBinaries = (category) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://bonheur-9586c-default-rtdb.firebaseio.com/" +
          category +
          "/binaries.json"
      );
      if (!response.ok) {
        throw new Error(
          "Something went wrong while fetching the events from the database..."
        );
      }

      const data = await response.json();
      const loadedBinaries = [];

      for (const key in data) {
        loadedBinaries.push(
          new Binary(
            key,
            data[key].imageUri,
            data[key].title,
            data[key].date,
            data[key].description,
            data[key].participants
          )
        );
      }

      dispatch({ type: FETCH_BINARY, binariesData: loadedBinaries });
    } catch (error) {
      throw error;
    }
  };
};
