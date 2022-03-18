import Binary from "../../models/binary";
import { ADD_BINARY, FETCH_BINARY, UPDATE_BINARY } from "../actions/binary";

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

    case UPDATE_BINARY:
      const binaryIndex = state.binaries.findIndex(
        (binary) => binary.id === action.binaryId
      );
      const updatedBinary = new Binary(
        action.binaryId,
        state.binaries[binaryIndex].imageUri,
        state.binaries[binaryIndex].title,
        state.binaries[binaryIndex].date,
        state.binaries[binaryIndex].description,
        action.binaryData
      );

      return {
        binaries: updatedBinary,
      };
  }
  return state;
};
