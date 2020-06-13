export const deleteBook = (id) => {
  //object represents action we're returning
  return {
    type: "DELETE_BOOK",
    id,
  };
};
