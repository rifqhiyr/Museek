const initialState = {
  musicians: [],
  musicianById: {},
  privacy: {},
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
    case "GET_MUSICIAN_DETAIL":
      return {
        ...state,
        ...payload,
        musicianById: payload
      };
    case "GET_PRIVACY":
      return {
        ...state,
        ...payload,
        privacy: payload
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
