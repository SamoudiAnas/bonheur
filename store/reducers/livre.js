import Livre from "../../models/livre";
import { ADD_LIVRE, FETCH_LIVRES } from "../actions/livre";

const initialState = {
  livres: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_LIVRE:
      const newLivre = new Livre(
        action.livreData.id,
        action.livreData.imageUrl,
        action.livreData.url
      );
      return {
        livres: state.livres.concat(newLivre),
      };
    case FETCH_LIVRES:
      return {
        livres: action.fetchedLivres,
      };
  }

  return state;
};
