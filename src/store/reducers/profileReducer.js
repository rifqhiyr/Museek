const initialState = {
  profile: {},
  errors: []
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "GET_PROFILE":
      return {
        ...state,
        ...payload,
        profile: payload
      };
    case "EDIT_SUCCESS":
      return {
        ...state,
        ...payload
      };
    case "EDIT_FAIL":
      return {
        ...state,
        errors: payload
      };
    default:
      return state;
  }
}
