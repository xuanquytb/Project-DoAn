const initState = {
  authLoading: false,
  isAuthenticated: false,
  user: null,
};

const authReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_AUTH": {
      return { ...state };
    }
  }
};
export { initState };
export default authReducer;
