import {
  CHANGE_THEMES
} from "./actionTypes"

import themesDataJson from '../../utils/themes.json'
import videoDataJson from '../../utils/videos.json'
const INIT_STATE = {
  themesData: themesDataJson,
  videosData: videoDataJson,
  themesId:1,
};

const ThemeState = (state = INIT_STATE, action) => {
  
  switch (action.type) {

      case CHANGE_THEMES:
        return {
          ...state,
          themesId: action.payload,
        };

    default:
      return state;
  }
};

export default ThemeState;