import Post from "../../models/post";

export const ADD_POST = "ADD_POST";
export const FETCH_POSTS = "FETCH_POSTS";

export const addPost = (title, description, imageUri) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://bonheur-9586c-default-rtdb.firebaseio.com/posts.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title,
            description,
            imageUri,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = response.json();

      dispatch({
        type: ADD_POST,
        postData: { id: data.name, title, description, imageUri },
      });
    } catch (error) {
      throw error;
    }
  };
};

export const fetchPosts = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://bonheur-9586c-default-rtdb.firebaseio.com/posts.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong while fetching posts...");
      }
      const data = await response.json();
      // storing the fetched posts in an array
      const loadedPosts = [];
      for (const key in data) {
        loadedPosts.push(
          new Post(
            key,
            data[key].title,
            data[key].description,
            data[key].imageUri
          )
        );
      }
      dispatch({ type: FETCH_POSTS, postsData: loadedPosts });
    } catch (error) {
      throw error;
    }
  };
};
