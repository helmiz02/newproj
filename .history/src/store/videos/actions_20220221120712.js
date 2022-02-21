import axios from "axios";
import {
    REQUEST_THEMES,
    THEMES_DATA,
    CHANGE_VIDEO_CATEGORY
  } from "./actionTypes"

  export const changeCategory = videos => ({

    type: CHANGE_VIDEO_CATEGORY,
    payload: videos,
  
  })

  export const requestThemes = (data) => async (dispatch) => {
    dispatch({
      type: REQUEST_THEMES,
    });
    try {
      const json = await axios.get("data.json");
      console.log(json);
      dispatch({
        type: THEMES_DATA,
        usersData: json.data,
        isError: false,
      });
    } catch (e) {
      dispatch({
        type: USER.LOAD_SUCCESS,
        usersData: [],
        isError: true,
      });
    }
  };