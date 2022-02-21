import {
    CHANGE_VIDEO_CATEGORY
  } from "./actionTypes"

  export const changeCategory = videos => ({

    type: CHANGE_VIDEO_CATEGORY,
    payload: videos,
  
  })