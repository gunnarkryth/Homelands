import { Box, TextField, IconButton } from "@mui/material";

export const SearchBar = () => {

  const [searchWord, setSearchWord] =

  return (
    <Box>
      <TextField variant="outlined" label="Søg" value={} onChange={}></TextField>
      <IconButton />
    </Box>
  );
};
