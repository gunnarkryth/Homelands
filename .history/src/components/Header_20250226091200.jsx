import { AppBar, Container, Toolbar } from "@mui/material";
import { Logo } from "./Logo";
import { Nav } from "./Nav";
import { SearchBar } from "./SearchBar";

export const Header = () => {
  return (
    <AppBar backgroundColor="none"
      position="sticky"
      sx={{
        backgroundColor: "none",
        backgroundImage: "src/assets/images/header.png",
      }}
    >
      <Container backgroundColor="none" maxWidth="" disableGutters>
        <Toolbar backgroundColor="none">
          <Logo />
          <Nav />
          <SearchBar />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
