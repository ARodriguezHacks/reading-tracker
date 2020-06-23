import bookReducer from "./bookReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  book: bookReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});

export default rootReducer;
