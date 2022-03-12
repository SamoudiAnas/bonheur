import Event from "../../models/event";
import { ADD_EVENT, FETCH_EVENT } from "../actions/event";

const initialState = {
  events: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_EVENT:
      const newEvent = new Event(
        action.eventData.id,
        action.eventData.imageUri,
        action.eventData.title,
        action.eventData.date,
        action.eventData.description
      );
      return {
        events: state.events.concat(newEvent),
      };

    case FETCH_EVENT:
      return {
        events: action.eventData,
      };
  }

  return state;
};
