import  React,{useState} from 'react';
import GridVideosComponent from './gridVideosComponent';
import TabsComponent from "./tabsComponent";

export default function Videos() {
    const [themeID, setThemeID] = useState(1);
  return (
    <>
     <TabsComponent setThemeID={setThemeID}/>
     <GridVideosComponent themeID={themeID} />
    </>
  );
}
