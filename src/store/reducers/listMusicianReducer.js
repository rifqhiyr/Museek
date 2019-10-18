const initialState = {
  musicians: [],
  sort: ""
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
    case "BY_PRICE":
      return {
        ...state,
        musicians: payload.musicians,
        sort: payload.sort
      };
    default:
      return state;
  }
}
