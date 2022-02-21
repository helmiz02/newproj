import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import themes from "../../utils/themes.json"
import { useSelector } from "react-redux";
export default function TabsComponent({setThemeID}) {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const { themesData } = useSelector((state) => state.themesData);
  console.log("themesData", themesData)
  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={handleChange} >
      {themes.map((theme)=>  <Tab label={theme.name} onClick={setThemeID(theme.id)} key={(theme.id)}/>
      )}
       
      </Tabs>
    </Box>
  );
}