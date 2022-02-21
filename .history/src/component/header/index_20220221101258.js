import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";

import { TextField } from "@mui/material";
import DatePickerComponent from "./datePickerComponent";
import "./style.css"
export default function Header() {
  return (
    <div className="displayStyle">
      <div className="displayStyle">
        <h1> Logo </h1>
        <OndemandVideoIcon />
      </div>

      <div className="displayStyle">
      <TextField fullWidth label="Rechercher" id="Rechercher" />
        <DatePickerComponent />
    
      </div>
    </div>
  );
}
