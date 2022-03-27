import {
  USER_LOADED_SUCCESS,
  USER_LOADED_FAIL,
  ADD_USER,
  DELETE_USER,
  UPDATE_USER,
  FIND_USER,
} from "../Context/Constants";

const InitUser = {
  user: null,
  users: [],
  usersLoading: true,
};

const userReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_LOADED_SUCCESS:
      //   console.log(payload);
      return {
        ...state,
        users: payload,
        userLoading: false,
      };

    case USER_LOADED_FAIL:
      return {
        ...state,
        user: [],
        userLoading: false,
      };

    // case ADD_POST:
    //   return {
    //     ...state,
    //     user: [...state.user, payload],
    //   };

    // case DELETE_POST:
    //   return {
    //     ...state,
    //     user: state.user.filter((post) => post._id !== payload),
    //   };

    // case FIND_POST:
    //   return { ...state, post: payload };

    // case UPDATE_POST:
    //   const newuser = state.user.map((post) =>
    //     post._id === payload._id ? payload : post
    //   );

    //   return {
    //     ...state,
    //     user: newuser,
    //   };

    default:
      return state;
  }
};

export { InitUser };
export default userReducer;
