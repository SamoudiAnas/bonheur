import Post from "../../models/post";
import { ADD_POST, FETCH_POSTS } from "../actions/post";

const initialState = {
  posts: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = new Post(
        action.postData.id,
        action.postData.title,
        action.postData.description,
        action.postData.imageUri
      );

      return {
        posts: state.posts.concat(newPost),
      };

    case FETCH_POSTS:
      return {
        posts: action.postsData,
      };
  }
  return state;
};
