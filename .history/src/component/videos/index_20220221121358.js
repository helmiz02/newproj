import  React,{useState} from 'react';
import GridVideosComponent from './gridVideosComponent';
import TabsComponent from "./tabsComponent";
import { useSelector, useDispatch } from "react-redux";
import { requestThemes } from "../../store/videos/actions";

export default function Videos() {
    const [themeID, setThemeID] = useState(1);
    const { themesData } = useSelector((state) => state);

  const dispatch = useDispatch();

  console.log(themesData)
  return (
    <>
     <TabsComponent setThemeID={setThemeID}/>
     <GridVideosComponent themeID={themeID} />
    </>
  );
}
