const initialState = {
  musicians: []
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "GET_MUSICIAN":
      return {
        ...state,
        ...payload,
        musicians: payload
      };
    default:
      return state;
  }
}
