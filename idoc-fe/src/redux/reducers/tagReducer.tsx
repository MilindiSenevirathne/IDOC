import { tagActionTypes } from "../actionTypes";
import produce from "immer";

const initialState = {
  allTagDetails: [],
};

const tagData = produce(
  (state = initialState, action: { type: any; payload: any }) => {
    const { type, payload } = action;

    switch (type) {
      case tagActionTypes.TAG_ADD_SUCCEED: {
        state.allTagDetails.push(payload);
        return state;
      }

      case tagActionTypes.TAG_UPDATE_SUCCEED: {
        const updated_tag_id = state.allTagDetails.findIndex(
          (item: { id: any }) => item.id === payload.id
        );
        state.allTagDetails[updated_tag_id] = payload;
        return state;
      }

      case tagActionTypes.TAG_DETAILS_GETTING_SUCCEED: {
        state.allTagDetails = payload;
        return state;
      }

      case tagActionTypes.CHILDREN_TAG_DETAILS_GETTING_SUCCEED: {
        const children_tag_id = state.allTagDetails.findIndex(
          (item: { id: any }) => item.id === payload.parent
        );
        state.allTagDetails[children_tag_id].childTags = payload.data;
        return state;
      }

      case tagActionTypes.TAG_SEARCH_SUCCEED: {
        state.allTagDetails = payload;
        return state;
      }

      case tagActionTypes.TAG_INACTIVE_SUCCEED: {
        console.log(payload);
        for (let i = 0; i < payload.length; i++) {
          const deleted_tag_id = state.allTagDetails.data.findIndex(
            (item: { id: any }) => item.id === payload[i]
          );
          state.allTagDetails.data.splice(deleted_tag_id, 1);
        }
        return state;
      }

      default: {
        return state;
      }
    }
  }
);

export default tagData;
