import { combineReducers } from "redux";
import authReducer from "./authReducer";
import listMusicianReducer from "./listMusicianReducer";
import profileReducer from "./profileReducer";

export default combineReducers({
  authReducer,
  listMusicianReducer,
  profileReducer
});
