//reducers takes in two things

//1 action (info about what happened)

//2 copy of current state

function posts(state = [], action) {
  switch(action.type) {
    case 'INCREMENT_LIKES' :
    const i = action.index;
    //return update state
      return [
        ...state.slice(0,i), //before the one we are going to update
        {...state[i], likes: state[i].likes + 1},
        ...state.slice(i + 1),
      ]
    default:
      return state;
  }
  return state;
}

export default posts;
