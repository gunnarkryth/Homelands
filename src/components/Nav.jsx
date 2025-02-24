import { NavLink } from "react-router-dom";
import { AppBar, Menu, MenuItem, Toolbar } from "@mui/material";

export const Nav = () => {
  return (
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
  );
};
