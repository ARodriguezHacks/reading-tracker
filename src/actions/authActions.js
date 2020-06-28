const signIn = (credentials) => {
  return (dipatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPasswrd(credentials.email, credentials.password)
      .then(() => {
        dispatchEvent({ type: "LOGIN_SUCCESS" });
      })
      .catch((err) => {
        dispatchEvent({ type: "LOGIN_ERROR", err });
      });
  };
};

const openLoginModal = () => {
  return {
    type: "OPEN_LOGIN_MODAL",
  };
};

const openSignUpModal = () => {
  return {
    type: "OPEN_SIGNUP_MODAL",
  };
};

export { signIn, openLoginModal, openSignUpModal };
