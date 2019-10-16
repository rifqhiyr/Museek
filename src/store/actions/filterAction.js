export const sortMusicians = (musicians, sort) => dispatch => {
  const data = musicians.slice();
  if (sort !== "") {
    data.sort((a, b) =>
      sort === "lowest"
        ? a.price > b.price
          ? 1
          : -1
        : a.price < b.price
        ? 1
        : -1
    );
  } else {
    data.sort((a, b) => (a._id > b._id ? 1 : -1));
  }
  return dispatch({
    type: "BY_PRICE",
    payload: {
      sort: sort,
      musicians: data
    }
  });
};
