import { AppBar, Container } from "@mui/material";
import { Logo } from "./Logo";
import { Nav } from "./Nav";
import { SearchBar } from "./SearchBar";

export const Header = () => {
  return (
    <Container maxWidth>
      <Logo />
      <Nav />
      <SearchBar />
    </Container>
  );
};
