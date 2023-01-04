import { ClickAwayListener } from "@mui/material";

export default function SearchBar() {
  const handleClickAway = () => {
    console.log("clicked away listener");
  };

  return <div>This is search bar.</div>;

  // return (
  //   <ClickAwayListener onClickAway={handleClickAway}>
  //     This is search bar
  //   </ClickAwayListener>
  // );
}
