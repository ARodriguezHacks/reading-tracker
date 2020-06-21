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
    //console.log(state);
    let bookModal = state.addBookModal;
    return {
      ...state,
      addBookModal: !bookModal,
    };
  } else if (action.type === "ADD_BOOK") {
    //console.log("added book", action.payload);
    return state;
  } else if (action.type === "ADD_BOOK_ERROR") {
    console.log("add book error", action.err);
    return state;
  } else {
    return state;
  }
  // return {
  //   ...state,
  //   books: [...state.books, action.payload],
  // };
  //console.log(state);
};

export default rootReducer;
