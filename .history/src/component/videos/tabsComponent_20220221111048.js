import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import themes from "../../utils/themes.json"
export default function TabsComponent({setThemeID}) {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={handleChange} >
      {themes.map((theme)=>  <Tab label={theme.name} onClick={setThemeID(theme.id)} key={(theme.id)}/>
      )}
       
      </Tabs>
    </Box>
  );
}