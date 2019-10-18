const initialState = {
  event: {},
  errors: []
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "ADD_EVENT_SUCCESS":
      return {
        ...state,
        ...payload
      };
    case "ADD_EVENT_FAIL":
      return {
        ...state,
        errors: payload
      };
    default:
      return state;
  }
}
