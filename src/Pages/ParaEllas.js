import React, { useEffect, useState } from "react";
import CardVentas from "../components/Card/CardVentas";
import DrawerFijo from "../components/Drawer/DrawerFijo";
import { makeStyles } from "@material-ui/core/styles";
import productos from "../jsonPruebas/ParaEllasjson.json";
import { Grid } from "@material-ui/core";

const ParaEllas = () => {
  const [productosEllas, setProductosEllas] = useState([]);

  useEffect(() => {
    setProductosEllas(productos.productos);
  }, []);

  const useStyles = makeStyles({
    root: {
      marginLeft: "300px",
      marginTop: "64px",
      display: "flex",
    },
    cardsVentas: {
      marginTop: "50px",
    },
  });
  const classes = useStyles();
  return (
    <div>
      <DrawerFijo />

      <div className={classes.root}>
        {" "}
        <Grid container>
          {productosEllas.map((producto) => {
            return (
              <Grid
                item
                sm={12}
                md={6}
                lg={4}
                xl={4}
                className={classes.cardsVentas}
              >
                <CardVentas imagenProducto={producto} />
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
};

export default ParaEllas;
