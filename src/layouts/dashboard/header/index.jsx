import { AppBar, styled } from "@mui/material";
import SearchBar from "./SearchBar";

const StyledRoot = styled(AppBar)({
  position: "fixed",
  top: 0,
  right: 0,
  width: "100%",
});

export default function Header() {
  return (
    <StyledRoot>
      <h1>This is header</h1>

      <SearchBar />
    </StyledRoot>
  );
}
