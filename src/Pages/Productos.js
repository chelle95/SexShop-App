import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import DrawerFijo from "../components/Drawer/DrawerFijo";
import CardVentas from "../components/Card/CardVentas";
import { Grid } from "@material-ui/core";

const Productos = () => {
  const [productos, setProductos] = useState([]);
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

  const fetchProductosEllas = async () => {
    const responseEllas = await fetch(
      "http://localhost:3004/productosParaEllas"
    );
    const resDataEllas = await responseEllas.json();
    const responseEllos = await fetch(
      "http://localhost:3004/productosParaEllos"
    );
    const resDataEllos = await responseEllos.json();
    const resData = [...resDataEllas, ...resDataEllos];
    setProductos(await resData);
  };

  useEffect(() => {
    fetchProductosEllas();
    // dependencias vacias, ejecuto la funcion anonima una sola vez.
  }, []);
  return (
    <div>
      <DrawerFijo />{" "}
      <div className={classes.root}>
        <Grid container>
          {productos.map((producto) => {
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

export default Productos;
