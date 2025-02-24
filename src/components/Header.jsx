import { AppBar } from "@mui/material";
import { Logo } from "./Logo";
import { Nav } from "./Nav";
import { SearchBar } from "./SearchBar";

export const Header = () => {
  return (
    <AppBar>
      <Logo />
      <Nav />
      <SearchBar />
    </AppBar>
  );
};
