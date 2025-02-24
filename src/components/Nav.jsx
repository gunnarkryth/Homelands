import { NavLink } from "react-router-dom";
import { MenuItem, Toolbar, Typography } from "@mui/material";

export const Nav = () => {
  return (
    <Toolbar>
      <MenuItem>
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <Typography variant="h4" color="secondary.main">
            Forside
          </Typography>
        </NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink to="/boliger" style={{ textDecoration: "none" }}>
          <Typography variant="h4" color="secondary.main">
            Boliger til salg
          </Typography>
        </NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink to="/login" style={{ textDecoration: "none" }}>
          <Typography variant="h4" color="secondary.main">
            Login
          </Typography>
        </NavLink>
      </MenuItem>
    </Toolbar>
  );
};
