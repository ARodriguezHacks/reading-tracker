const deleteBook = (id) => {
  //object represents action we're returning
  return {
    type: "DELETE_BOOK",
    id,
  };
};

const openAddBookModal = () => {
  return {
    type: "OPEN_ADD_BOOK_MODAL",
  };
};

export { deleteBook, openAddBookModal };
