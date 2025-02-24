import { NavLink } from "react-router-dom";
import { AppBar, Menu, MenuItem, Toolbar } from "@mui/material";

export const Nav = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <MenuItem>
          <NavLink to="/">Forside</NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="/boliger">Boliger til salg</NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="/login">Login</NavLink>
        </MenuItem>
      </Toolbar>
    </AppBar>
  );
};
