import { ClickAwayListener, IconButton } from "@mui/material";

import { useState } from "react";
import Iconify from "src/components/iconify";

export default function SearchBar() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  return (
    <ClickAwayListener onClickAway={handleClose}>
      {!open && (
        <IconButton onClick={handleOpen}>
          <Iconify icon="eva:search-fill" />
        </IconButton>
      )}
    </ClickAwayListener>
  );
}
