import { userActionTypes } from "../actionTypes/index";
import produce from "immer";

const initialState = {
  allUserDetails: {data:[], totalSize:0}
};

const userData = produce(
  (state = initialState, action: { type: any; payload: any }) => {
    const { type, payload } = action;

    switch (type) {

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
        state.allUserDetails.data.push(data);
        return state;
      }

      case userActionTypes.USER_UPDATE_SUCCEED: {
        const updated_user_id = state.allUserDetails.data.findIndex(
          (item: { epfNumber: any }) => item.epfNumber === payload.epfNumber
        );
        state.allUserDetails.data[updated_user_id] = payload;
        return state;
      }

      case userActionTypes.USER_INACTIVE_SUCCEED: {
        console.log(payload)

        for (let i = 0; i < payload.length; i++) {
          const deleted_user_id = state.allUserDetails.data.findIndex(
            (item: { epfNumber: any }) => item.epfNumber === payload[i].epfNumber
          );
          console.log(deleted_user_id,payload)
          state.allUserDetails.data.splice(deleted_user_id,1)
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
