import bookReducer from "./bookReducer";
import { firestoreReducer } from "redux-firestore";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  book: bookReducer,
  firestore: firestoreReducer,
});

export default rootReducer;
