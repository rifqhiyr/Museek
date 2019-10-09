import axios from "axios";

export const edituser = formData => async dispatch => {
  try {
    const res = await axios.put(
      "https://museek.herokuapp.com/api/user/profile",
      formData
    );
    console.log(res.data);
    dispatch({
      type: "EDIT_SUCCESS",
      payload: res.data
    });
  } catch (error) {
    console.log("error", error.response.data);
    dispatch({
      type: "EDIT_FAIL",
      payload: error.response.data
    });
  }
};

export const getMusician = () => async dispatch => {
  try {
    const res = await axios.get(
      "https://museek.herokuapp.com/api/user?role=musician"
    );
    
    console.log(res.data);
    dispatch({
      type: "GET_MUSICIAN",
      payload: res.data
    });
  } catch (error) {
    console.log(error.response);
  }
};

export const getProfileMusician = () => async dispatch => {
  try {
    const res = await axios.get(
      "https://museek.herokuapp.com/api/user/profile"
    );
    dispatch({
      type: "GET_MUSICIAN_PROFILE",
      payload: res.data
    });
  } catch (error) {
    console.log(error.response.data);
  }
};
