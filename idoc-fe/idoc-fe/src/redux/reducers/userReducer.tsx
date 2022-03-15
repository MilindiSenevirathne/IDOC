import { userActionTypes } from "../actionTypes/index";
import produce from "immer";

const initialState = {
  userDetails: null,
  allUserDetails: [],
};

const userData = produce(
  (state = initialState, action: { type: any; payload: any }) => {
    const { type, payload } = action;

    switch (type) {
      case userActionTypes.USER_LOGIN_SUCCEED: {
        state.userDetails = payload;
        return state;
      }
      case userActionTypes.USER_LOGIN_FAILED: {
        state.userDetails = null;
        return state;
      }

      case userActionTypes.USER_LOGOUT_SUCCEED: {
        state.userDetails = null;
        return state;
      }

      case userActionTypes.USER_DETAILS_GETTING_SUCCEED: {
        state.allUserDetails = payload;
        return state;
      }

      case userActionTypes.USER_SEARCH_SUCCEED: {
        state.allUserDetails = payload;
        return state;
      }

      case userActionTypes.USER_ADD_SUCCEED: {
        var data = payload;
        data.id = state.allUserDetails.length + 1;
        state.allUserDetails.push(data);
        return state;
      }

      case userActionTypes.USER_UPDATE_SUCCEED: {
        const updated_user_id = state.allUserDetails.findIndex(
          (item: { id: any }) => item.id === payload.id
        );
        state.allUserDetails[updated_user_id] = payload;
        return state;
      }

      case userActionTypes.USER_DELETE_SUCCEED: {
        for (let i = 0; i < payload.length; i++) {
          const deleted_user_id = state.allUserDetails.findIndex(
            (item: { id: any }) => item.id === payload[i]
          );
          state.allUserDetails.splice(deleted_user_id, 1);
        }
        return state;
      }
      default: {
        return state;
      }
    }
  }
);

export default userData;
