import  React from 'react';
import GridVideosComponent from './gridVideosComponent';
import TabsComponent from "./tabsComponent";
import { useSelector } from "react-redux";

export default function Videos() {
    // const [themeID, setThemeID] = useState(1);
    const themesData  = useSelector((state) => state.themesData);
    const videosData  = useSelector((state) => state.videosData);
    const themesId  = useSelector((state) => state.themesId);
 
  return (
    <>
     <TabsComponent  themesData={themesData}/>
     <GridVideosComponent themesId={themesId} listeVideo={videosData}/>
    </>
  );
}
