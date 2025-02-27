import { Box, TextField, IconButton } from "@mui/material";

export const SearchBar = () => {

  const [searchword, setSearchword] =

  return (
    <Box>
      <TextField variant="outlined" label="Søg" value={} onChange={}></TextField>
      <IconButton />
    </Box>
  );
};
