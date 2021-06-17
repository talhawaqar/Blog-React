import { combineReducers } from "redux";

export default combineReducers({
  posts: (posts = [], action) => {
    if (action.type === 'FETCH_POSTS') {
      return action.payload;
    }
    return posts;
  },
});
