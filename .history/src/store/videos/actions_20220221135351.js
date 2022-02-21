import axios from "axios";
import {
    REQUEST_THEMES,
    THEMES_DATA,
    CHANGE_THEMES,
    CHANGE_VIDEO_CATEGORY
  } from "./actionTypes"

  export const changeCategory = videos => ({

    type: CHANGE_VIDEO_CATEGORY,
    payload: videos,
  
  })
  export const changeTheme = theme => ({

    type: CHANGE_THEMES,
    payload: theme,
  
  })
  export const requestThemes = (data) => async (dispatch) => {
    dispatch({
      type: REQUEST_THEMES,
    });
    try {
      const json = await axios.get("themes.json");
      console.log(json);
      dispatch({
        type: THEMES_DATA,
        themesData: json.data,
        isError: false,
      });
    } catch (e) {
      dispatch({
        type: THEMES_DATA,
        themesData: [],
        isError: true,
      });
    }
  };