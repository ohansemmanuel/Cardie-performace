import { UPDATE_PROFESSION } from "../actions/types";

const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_PROFESSION:
      return {
        ...state,
        description: action.payload
      };

    default:
      return state;
  }
};

export default reducer;
