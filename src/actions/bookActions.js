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

// the addBook action will be using thunk, which is middleware which in this case will make an async call to a database. So instead of returning an object like other Redux actions with a type property, this addBook action will return a function with two parameters: the first one will be a dispatch function and a the second a getState function. The dispatch function will be the action (like addBook) that will take in as a parameter the action object which at its minimum needs a type property.

const addBook = (payload) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore(); //creates a reference to our firestore datatase. Also the fact that its called 'getFirestore' is a giveaway that this is an asynchronous function because GET is an HTTP method for requesting info from a server.
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore
      .collection("books")
      .add({
        ...payload,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
        addedAt: new Date(),
      })
      .then(() => {
        dispatch({ type: "ADD_BOOK", payload });
      })
      .catch((err) => {
        dispatch({ type: "ADD_BOOK_ERROR", err });
      });
  };
};

export { deleteBook, openAddBookModal, addBook };
