import { GET_POSTS_REQUEST, GET_POSTS_SUCCESS, GET_POSTS_FAILURE } from '../actions/tweet';

const defaultState = {
  contents: []
};

export default function reducer(state = defaultState , action){
  switch(action.type){
   case GET_POSTS_REQUEST:
      return Object.assign({} , state , {
        contents: []
      });
    case GET_POSTS_SUCCESS:
      return Object.assign({} , state , {
        contents: action.posts,
      });
    case GET_POSTS_FAILURE:
      return Object.assign({} , state , {
        error: action.error,
      });
    default:
      return state
  }
}
