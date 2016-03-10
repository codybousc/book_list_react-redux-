export function selectBook(book) {
  //selectBook is an action creator, it needs to return an action
  //which is an object with a type propery
  //actions usually have two properties: a type and a payload (usually contains a payload)
  return {
    type: 'BOOK_SELECTED',
    payload: book

  }
}

//an action is just a function
//but, you need to make sure that the actions runs through all of the reducer_books
