import { styled } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "./header";
import Nav from "./nav";

const StyledRoot = styled("div")({
  display: "flex",
});

const Main = styled("main")({});

export default function DashboardLayout() {
  return (
    <StyledRoot>
      <Header />

      <Nav />

      <Main>
        <Outlet />
      </Main>
    </StyledRoot>
  );
}
