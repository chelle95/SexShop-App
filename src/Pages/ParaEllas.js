import React, { useEffect, useState } from "react";
import CardVentas from "../components/Card/CardVentas";
import DrawerFijo from "../components/Drawer/DrawerFijo";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { ApiGeneralGet } from "../API/Api";

const ParaEllas = () => {
  const [productosEllas, setProductosEllas] = useState([]);

  const fetchProductosEllas = async () => {
    const response = await ApiGeneralGet({}, "/buscarProductos");
    const resData = await response.data.response;
    setProductosEllas(await resData);
  };

  useEffect(() => {
    fetchProductosEllas();
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
          {productosEllas.map((producto) => {
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
                <CardVentas
                  producto={producto}
                  imagenProducto={producto.imagen}
                />
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
};

export default ParaEllas;
