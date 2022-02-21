import  React,{useState} from 'react';
import TabsComponent from "./tabsComponent";

export default function Videos() {
    const [themeID, setThemeID] = useState(1);
  return (
    <>
     <TabsComponent setThemeID={setThemeID}/>
    </>
  );
}
