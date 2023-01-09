import { useState } from "react";
import { styled } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "./header";
import Nav from "./nav";

const StyledRoot = styled("div")({
  display: "flex",
});

const Main = styled("main")({});

export default function DashboardLayout() {
  const [open, setOpen] = useState(false);

  return (
    <StyledRoot>
      <Header open={open} setOpen={setOpen} />

      <Nav open={open} />

      <Main>
        <Outlet />
      </Main>
    </StyledRoot>
  );
}
