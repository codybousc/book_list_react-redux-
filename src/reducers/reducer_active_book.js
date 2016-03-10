//reducers are only ever called when an action occurs
//state argument here is not applicaiton state, but only the state that this
//reducer is responsible for
//most reducers are setup with JS switch statements

export default function(state = null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }
  //undefined when app first boots up
  //to get passed this, we set state to null in params
  return state
}
