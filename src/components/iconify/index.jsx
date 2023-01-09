import { Box } from "@mui/material";

import { Icon } from "@iconify/react";

import { forwardRef } from "react";

const Iconify = forwardRef(({ icon, width = 20, sx, ...rest }, ref) => {
  return (
    <Box
      ref={ref}
      component={Icon}
      icon={icon}
      sx={{ width, height: width, ...sx }}
      {...rest}
    />
  );
});

export default Iconify;
