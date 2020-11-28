import React from "react";
import { Grid, Typography } from "@material-ui/core";

const DivisionUno = () => {
  return (
    <div>
      <Grid container>
        <Grid item lg={4}>
          <Typography variant="h5">100% Discrecion</Typography>
        </Grid>
        <Grid item lg={4}>
          <Typography variant="h5">Envio seguro</Typography>
        </Grid>
        <Grid item lg={4}>
          <Typography variant="h5">Varios metodos de pago</Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default DivisionUno;
