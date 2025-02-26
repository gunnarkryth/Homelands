import { Box, TextField, IconButton } from "@mui/material";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export const SearchBar = () => {
  const [searchWord, setSearchWord] = useState();

  return (
    <Box>
      <TextField
        variant="outlined"
        label="Søg"
        value={searchWord}
        onChange={(event) => setSearchWord(event.target.value)}
      ></TextField>
      <IconButton>
        <NavLink
      </IconButton>
    </Box>
  );
};
