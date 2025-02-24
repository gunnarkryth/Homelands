import { NavLink } from "react-router-dom";
import { MenuItem, Toolbar } from "@mui/material";

export const Nav = () => {
  return (
    <Toolbar>
      <MenuItem>
        <NavLink to="/" style={{ textDecoration: "none", color: "white" }}>
          Forside
        </NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink
          to="/boliger"
          style={{ textDecoration: "none", color: "white" }}
        >
          Boliger til salg
        </NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink to="/login" style={{ textDecoration: "none", color: "white" }}>
          Login
        </NavLink>
      </MenuItem>
    </Toolbar>
  );
};
