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
  } else if (action.type === "OPEN_ADD_BOOK_MODAL") {
    console.log(state);
    let bookModal = state.addBookModal;
    return {
      ...state,
      addBookModal: !bookModal,
    };
  } else if (action.type === "ADD_BOOK") {
    return {
      ...state,
      books: [...state.books, action.payload],
    };
  }
  //console.log(state);
  return state;
};

export default rootReducer;
