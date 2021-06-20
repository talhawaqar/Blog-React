import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  const posts = getState().posts;
  // const userIds = _.uniq(_.map(posts, 'userId'));
  // userIds.forEach( id => dispatch(fetchUser(id)));
  _.chain(posts)
    .map('userId')
    .uniq()
    .forEach( id => dispatch(fetchUser(id)))
    .value();
};

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('posts');
  dispatch({
    type: 'FETCH_POSTS',
    payload: response
  });
};

export const fetchUser = (userId) => async dispatch => {
  const response = await jsonPlaceholder.get(`users/${userId}`);
  dispatch({
    type: 'FETCH_USER',
    payload: response.data
  });
};

// const _fetchUser = _.memoize(async (userId, dispatch) => {
//   const response = await jsonPlaceholder.get(`users/${userId}`);
//   dispatch({
//     type: 'FETCH_USER',
//     payload: response.data
//   });
// });
