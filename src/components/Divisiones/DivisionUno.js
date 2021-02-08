import React from "react";
import { Grid, IconButton, Typography } from "@material-ui/core";

import LocalShippingOutlinedIcon from "@material-ui/icons/LocalShippingOutlined";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

import { makeStyles } from "@material-ui/core/styles";

const DivisionUno = () => {
  const useStyles = makeStyles({
    divisionUno: {
      marginTop: "80px",
      // Maxwidth: "400px",
      //Maxheight: "300px",
      //textAlign: "center",
      //backgroundColor: "grey",
    },
    gridDivision: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      width: "250px",
      height: "250px",
      transition: "all 0.4s ease;",
      "&:hover": {
        boxShadow: "0 1px 0 grey",
      },
    },
    iconos: {
      fontSize: "40px",
      borderWidht: "none",
      transition: "all 0.3s ease;",
      "&:hover": {
        width: "80px",
        height: "80px",
      },
    },
    espacioBoton: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      width: "100px",
      height: "100px",
    },
  });
  const classes = useStyles();
  return (
    <div>
      <Grid container className={classes.divisionUno}>
        <Grid item sm={12} md={4} lg={4} className={classes.gridDivision}>
          <div className={classes.espacioBoton}>
            <LockOutlinedIcon
              style={{ color: "#bdbdb4" }}
              className={classes.iconos}
            />
          </div>
          <Typography variant="h5" className={classes.descripciones}>
            100% Discrecion
          </Typography>
        </Grid>
        <Grid item sm={12} md={4} lg={4} className={classes.gridDivision}>
          <div className={classes.espacioBoton}>
            <LocalShippingOutlinedIcon
              style={{ color: "#bdbdb4" }}
              className={classes.iconos}
            />
          </div>
          <Typography variant="h5">Envio seguro</Typography>
        </Grid>
        <Grid item sm={12} md={4} lg={4} className={classes.gridDivision}>
          <div className={classes.espacioBoton}>
            <LocalMallOutlinedIcon
              style={{ color: "#bdbdb4" }}
              className={classes.iconos}
            />
          </div>
          <Typography variant="h5">Productos Exclusivos</Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default DivisionUno;
