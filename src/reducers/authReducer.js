import initState from "../store/initState";

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      console.log("login failed");
      return {
        ...state,
        authError: "Login failed",
      };
    case "SIGNUP_ERROR":
      console.log("signup error");
      return {
        ...state,
        authError: action.err.message,
      };
    case "SIGNUP_SUCCESS":
      console.log("signup siccess");
      return {
        ...state,
        authError: null,
      };
    case "LOGIN_SUCCESS":
      console.log("login success");
      return {
        authError: null,
      };
    case "OPEN_LOGIN_MODAL":
      let loginModal = state.loginModal;
      console.log("opened login modal");
      return {
        ...state,
        loginModal: !loginModal,
      };
    case "OPEN_SIGNUP_MODAL":
      let signUpModal = state.signUpModal;
      console.log("opened sign up modal");
      return {
        ...state,
        signUpModal: !signUpModal,
      };
    case "OPEN_MOBILE_SIDE_MENU":
      let mobileSideMenu = state.mobileSideMenu;
      return {
        ...state,
        mobileSideMenu: !mobileSideMenu,
      };
    case "SIGNOUT_SUCCESS":
      console.log("signout success");
      return state;
    default:
      return state;
  }
};

export default authReducer;
