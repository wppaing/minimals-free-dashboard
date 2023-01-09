import { AppBar, IconButton, styled, Toolbar } from "@mui/material";
import Iconify from "components/iconify";
import SearchBar from "./SearchBar";
import { HEADER_MOBILE, NAV_WIDTH } from "utils/constants";

const StyledRoot = styled(AppBar)({
  width: `calc(100% - ${NAV_WIDTH}px)`,
});

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: HEADER_MOBILE,
}));

export default function Header({ onOpenNav }) {
  return (
    <StyledRoot>
      <StyledToolbar>
        <IconButton
          onClick={onOpenNav}
          sx={{
            mr: 1,
            color: "text.primary",
            display: { lg: "none" },
          }}
        >
          <Iconify icon="eva:menu-2-fill" />
        </IconButton>

        <SearchBar />
      </StyledToolbar>
    </StyledRoot>
  );
}
