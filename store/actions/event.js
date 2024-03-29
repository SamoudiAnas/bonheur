export const ADD_EVENT = "ADD_EVENT";
export const FETCH_EVENT = "FETCH_EVENT";

// Event Model
import Event from "../../models/event";

export const addEvent = (
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
          "/events.json",
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
        type: ADD_EVENT,
        eventData: {
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

export const fetchEvents = (category) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://bonheur-9586c-default-rtdb.firebaseio.com/" +
          category +
          "/events.json"
      );
      if (!response.ok) {
        throw new Error(
          "Something went wrong while fetching the events from the database..."
        );
      }

      const data = await response.json();
      const loadedEvents = [];

      for (const key in data) {
        loadedEvents.push(
          new Event(
            key,
            data[key].imageUri,
            data[key].title,
            data[key].date,
            data[key].description,
            data[key].participants
          )
        );
      }

      dispatch({ type: FETCH_EVENT, eventData: loadedEvents });
    } catch (error) {
      throw error;
    }
  };
};
