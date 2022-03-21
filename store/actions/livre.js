import Livre from "../../models/livre";

export const ADD_LIVRE = "ADD_LIVRE";
export const FETCH_LIVRES = "FETCH_LIVRES";

export const addLivre = (imageUrl, url) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://bonheur-9586c-default-rtdb.firebaseio.com/Livres.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            imageUrl,
            url,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Something went wrong while adding the livre...");
      }

      const data = await response.json();

      dispatch({
        type: ADD_LIVRE,
        livreData: {
          id: data.name,
          imageUrl,
          url,
        },
      });
    } catch (error) {
      throw error;
    }
  };
};

export const fetchLivre = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://bonheur-9586c-default-rtdb.firebaseio.com/Livres.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong while fetching les livres ...");
      }

      const data = await response.json();
      const loadedLivres = [];
      for (const key in data) {
        loadedLivres.push(new Livre(key, data[key].imageUrl, data[key].url));
      }

      dispatch({ type: FETCH_LIVRES, fetchedLivres: loadedLivres });
    } catch (error) {
      throw error;
    }
  };
};
