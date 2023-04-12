"use client";
import { Button } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <Grid
      container
      spacing={2}
    >
      <Grid
        xs={12}
        md={6}
      >
        input
      </Grid>
      <Grid
        xs={12}
        md={6}
      >
        output
      </Grid>
    </Grid>
  );
};

export default page;
