import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import { TextField } from "@mui/material";

export default function Header() {
  return (
    <div>
      <div>
        <h1> Logo </h1>
        <OndemandVideoIcon />
      </div>

      <div>
      <TextField fullWidth label="Rechercher" id="Rechercher" />
      </div>
    </div>
  );
}
