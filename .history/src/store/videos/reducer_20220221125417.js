import themes from "../../utils/themes.json"
import {
    CHANGE_VIDEO_CATEGORY
  } from "./actionTypes"



const INIT_STATE = {
    themesData: themes,
    videosData: [],
    category : ''
  };

  const ThemeState = (state = INIT_STATE, action) => {
    switch (action.type) {
      case CHANGE_VIDEO_CATEGORY:
        return {
          ...state,
          category: action.payload,
        };

      default:
        return state;
    }
  };
  
  export default ThemeState;