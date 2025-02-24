import { NavLink } from "react-router-dom";
import { Menu, MenuItem, AppBar } from "@mui/material";

export const Nav = () => {
  return (
    <Menu>
      <MenuItem>
        <NavLink>Forside</NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink>Boliger til salg</NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink>Login</NavLink>
      </MenuItem>
    </Menu>
  );
};
