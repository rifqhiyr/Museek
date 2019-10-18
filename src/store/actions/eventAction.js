import axios from "axios";

export const addEvent = formData => async dispatch => {
  try {
    const res = await axios.post(
      "https://museek.herokuapp.com/api/event",
      formData
    );
    console.log(res.data);
    dispatch({
      type: "ADD_EVENT_SUCCESS",
      payload: res.data
    });
  } catch (error) {
    console.log("error", error.response.data);
    dispatch({
      type: "ADD_EVENT_FAIL",
      payload: error.response.data
    });
  }
};
