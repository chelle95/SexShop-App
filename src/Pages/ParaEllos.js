import React, { useEffect, useState } from "react";
import CardVentas from "../components/Card/CardVentas";
import DrawerFijo from "../components/Drawer/DrawerFijo";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const ParaEllos = () => {
  const [productosEllos, setProductosEllos] = useState([]);

  const fetchProductosEllos = async () => {
    const response = await fetch("http://localhost:3004/productosParaEllos");
    const resData = await response.json();
    setProductosEllos(await resData);
  };

  useEffect(() => {
    fetchProductosEllos();
    // dependencias vacias, ejecuto la funcion anonima una sola vez.
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
          {productosEllos.map((producto) => {
            return (
              <Grid
                key={producto.id}
                item
                sm={12}
                md={6}
                lg={4}
                xl={4}
                className={classes.cardsVentas}
              >
                <CardVentas imagenProducto={producto.imagen} />
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
};

export default ParaEllos;
