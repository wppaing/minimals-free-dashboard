import { Box } from "@mui/material";

import { forwardRef } from "react";

const Iconify = forwardRef(({ icon, width = 20, sx, ...rest }, ref) => {
  return (
    <Box
      ref={ref}
      component={icon}
      icon={icon}
      sx={{ width, height: width, ...sx }}
      {...rest}
    />
  );
});

export default Iconify;
