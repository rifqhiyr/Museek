const initialState = {
  musicians: [],
  musicianById: {},
  privacy: {},
  sort: "",
  category: "",
  filteredMusicians: []
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "GET_MUSICIAN":
      return {
        ...state,
        ...payload,
        musicians: payload,
        filteredMusicians: payload
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
        filteredMusicians: payload.musicians,
        sort: payload.sort
      };
    case "BY_CATEGORY":
      console.log(payload);
      return {
        ...state,
        filteredMusicians: payload.musicians,
        category: payload.category
      };
    default:
      return state;
  }
}
