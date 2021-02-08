import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Typography } from "@material-ui/core";

import React from "react";

const Logueado = () => {
  const useStyles = makeStyles({
    losPagos: {
      marginTop: "200px",
    },

    pagos: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
    },
  });

  const classes = useStyles();
  return (
    <Container className={classes.losPagos}>
      <div className={classes.metodo}>
        <Typography variant="h4">Metodo de pago</Typography>
        <Typography variant="subtitle2">
          Completa los siguientes datos
        </Typography>
      </div>

      <div className={classes.pagos}>
        <p>Tarjetas/Debito/Credito</p>
        <p>Efectivo</p>

        {/*<legend>Datos de la tarjeta</legend>
        <legend>Datos para retirar en local</legend>*/}
      </div>
    </Container>
  );
};

export default Logueado;
