import  React,{useState} from 'react';
import GridVideosComponent from './gridVideosComponent';
import TabsComponent from "./tabsComponent";
import { useSelector, useDispatch } from "react-redux";
import { requestThemes } from "./action";

export default function Videos() {
    const [themeID, setThemeID] = useState(1);
    const { themesData } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <>
     <TabsComponent setThemeID={setThemeID}/>
     <GridVideosComponent themeID={themeID} />
    </>
  );
}
