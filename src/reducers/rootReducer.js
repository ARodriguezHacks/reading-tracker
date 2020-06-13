import initState from "../store/initState";

const rootReducer = (state = initState, action) => {
  if (action.type === "DELETE_BOOK") {
    let newBooks = state.books.filter((book) => {
      return action.id !== book.id;
    });
    return {
      ...state,
      books: newBooks,
    };
  }
  return state;
};

export default rootReducer;
