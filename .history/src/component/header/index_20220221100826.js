import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton, InputBase, Paper, TextField } from "@mui/material";
import "./style.css"
export default function Header() {
  return (
    <div className="displayStyle">
      <div className="displayStyle">
        <h1> Logo </h1>
        <OndemandVideoIcon />
      </div>

      <div className="displayStyle">
      <TextField fullWidth label="Rechercher" id="Rechercher" >
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
     </TextField>
      {/* <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Google Maps"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      </Paper> */}
      </div>
    </div>
  );
}
