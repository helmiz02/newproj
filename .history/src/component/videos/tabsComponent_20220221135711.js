import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import themes from "../../utils/themes.json"
import { useDispatch } from "react-redux";

export default function TabsComponent({setThemeID,themesData}) {
  const [value, setValue] = React.useState(0);
  const dispatch = useDispatch()
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={handleChange} >
      {themesData.map((theme)=>  <Tab label={theme.name} onClick={dispatch(changeTheme(theme.id))} key={(theme.id)}/>
      )}
       
      </Tabs>
    </Box>
  );
}