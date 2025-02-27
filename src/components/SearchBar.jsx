import { Box, TextField, IconButton, Button } from "@mui/material";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export const SearchBar = () => {
  const [searchWord, setSearchWord] = useState();

  console.log("searchWord", searchWord);

  return (
    <Box display={"flex"} alignContent={"center"} justifyContent={"center"}>
      <TextField
        type="search"
        variant="standard"
        label="Search"
        name="search"
        id="search-field"
        value={searchWord}
        onChange={(event) => setSearchWord(event.target.value)}
      ></TextField>
      <NavLink to={searchWord ? `/search/${searchWord}` : `/housing`}>
        <Button variant="outlined" title="Søg" color="white">
          Søg
        </Button>
      </NavLink>
    </Box>
  );
};
