import Binary from "../../models/binary";
import { ADD_BINARY, FETCH_BINARY } from "../actions/binary";

const initialState = {
  binaries: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_BINARY:
      const newBinary = new Binary(
        action.binaryData.id,
        action.binaryData.imageUri,
        action.binaryData.title,
        action.binaryData.date,
        action.binaryData.description,
        action.binaryData.participants
      );

      return {
        binaries: state.binaries.concat(newBinary),
      };

    case FETCH_BINARY:
      return {
        binaries: action.binariesData,
      };
  }
  return state;
};
