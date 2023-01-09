import {
  Button,
  ClickAwayListener,
  IconButton,
  Input,
  InputAdornment,
  Slide,
  styled,
} from "@mui/material";
import Iconify from "components/iconify";
import { useState } from "react";
import { HEADER_MOBILE } from "utils/constants";

const StyledSearchBar = styled("div")({
  top: 0,
  left: 0,
  zIndex: 99,
  width: "100%",
  display: "flex",
  position: "absolute",
  alignItems: "center",
  height: HEADER_MOBILE,
});

export default function SearchBar() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <div>
        {!open && (
          <IconButton onClick={handleOpen}>
            <Iconify icon="eva:search-fill" />
          </IconButton>
        )}

        <Slide direction="down" in={open} mountOnEnter unmountOnExit>
          <StyledSearchBar>
            <Input
              autoFocus
              fullWidth
              disableUnderline
              placeholder="Search..."
              startAdornment={
                <InputAdornment position="start">
                  <Iconify icon="eva:search-fill" />
                </InputAdornment>
              }
            />
            <Button variant="contained" onClick={handleClose}>
              Search
            </Button>
          </StyledSearchBar>
        </Slide>
      </div>
    </ClickAwayListener>
  );
}
