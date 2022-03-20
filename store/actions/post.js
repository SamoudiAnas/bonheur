import Post from "../../models/post";

export const ADD_POST = "ADD_POST";
export const FETCH_POSTS = "FETCH_POSTS";
export const DELETE_POST = "DELETE_POST";

export const addPost = (title, description, imageUri, category) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://bonheur-9586c-default-rtdb.firebaseio.com/" +
          category +
          "/posts.json",
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

export const fetchPosts = (category) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://bonheur-9586c-default-rtdb.firebaseio.com/" +
          category +
          "/posts.json"
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

// Deleting the post
export const deletePost = (id, category) => {
  return async (dispatch) => {
    try {
      await fetch(
        `https://bonheur-9586c-default-rtdb.firebaseio.com/${category}/posts/${id}.json`,
        { method: "DELETE" }
      );

      dispatch({
        type: DELETE_POST,
      });
    } catch (error) {
      throw error;
    }
  };
};
