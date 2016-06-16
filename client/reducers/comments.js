//reducers takes in two things

//1 action (info about what happened)

//2 copy of current state

function postComments(state = [], action) {
  switch(action.type) {
    case 'ADD_COMMENT':
      //return the new state with new comment
      return [...state,{
        user: action.author,
        text: action.comment
      }];
    case 'REMOVE_COMMENT':
    //return new state without deleted comment
      return [
        //from start
        ...state.slice(0,action.i),
        //after deleted
        ...state.slice(action.i + 1)
      ]
      return state;
  }
  return state;
}

function comments(state = [], action) {
  if(typeof action.postId !== 'undefined') {
    return {
      //take current state
      ...state,
      //overwrite this post with new one
      [action.postId]: postComments(state[action.postId], action)
    }
  }
  return state;
}

export default comments;
