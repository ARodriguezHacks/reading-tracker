export const signIn = (credentials) => {
  return (dipatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase.auth().signInWithEmailAndPasswrd();
  };
};
