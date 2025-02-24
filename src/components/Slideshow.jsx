import { Box, IconButton } from "@mui/material"

export const Slideshow = () => {
  return (
    <Box>
        <IconButton aria-label="" onClick={handleNext}>
        <ArrowForwardIosIcon />
        </IconButton>
    </Box>
  )
}