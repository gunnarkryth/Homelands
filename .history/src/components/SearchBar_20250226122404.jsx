import { Box, TextField, IconButton } from "@mui/material";
import { useState } from "react";

export const SearchBar = () => {

  const [searchWord, setSearchWord] = useState()

  return (
    <Box>
      <TextField variant="outlined" label="Søg" value={searchWord} onChange={()}></TextField>
      <IconButton />
    </Box>
  );
};
