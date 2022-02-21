import  React,{useState} from 'react';
import GridVideosComponent from './gridVideosComponent';
import TabsComponent from "./tabsComponent";
import { useSelector, useDispatch } from "react-redux";
import { requestThemes } from "../../store/videos/actions";

export default function Videos() {
    const [themeID, setThemeID] = useState(1);
    const themesData  = useSelector((state) => state.themesData);
    const videosData  = useSelector((state) => state.videosData);
    const themesId  = useSelector((state) => state.themesId);
  const dispatch = useDispatch();

  console.log(themesId)
  return (
    <>
     <TabsComponent setThemeID={setThemeID} themesData={themesData}/>
     <GridVideosComponent themesId={themesId} listeVideo={videosData}/>
    </>
  );
}